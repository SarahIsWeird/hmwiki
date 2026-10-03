---
layout: "base"
title: "Color formatting"
tags:
  - internals
  - reverse_engineered
---
# Color formatting

<small>
This article is about the parsing and formatting of hackmud. If you're just looking for what colors are used in-game,
as well as their hex codes, please check out the article on <a>Colors</a> that doesn't yet exist.
</small>

Text coloring in {hackmud} is largely regex-based. As such, it often does not produce the output you'd expect it to.
This page tries to explain the inner workings of the reverse-engineered coloring code.

Since the code is not open-source, it doesn't include actual C# snippets. It is obfuscated anyway, so there would be
little use. The decompiled code is also very messy, but it is unclear whether that is only due to being decompiled or
also due to the actual code written by ComCODE. As a stand-in, it is thoroughly explained with examples. Additionally,
a MIT-licensed TypeScript implementation will be made available Soon&trade;.

## The basics

{hackmud} uses [TextMesh Pro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/index.html) to render
text onto the screen. Since TMP doesn't recognize {hackmud}'s color code formatting, it is transformed into `<color>`
tags before being rendered. For example, {0}(&#96;BHi!&#96;) would be turned into
{0}(&lt;color=#CACACAFF&gt;Hi!&lt;/color&gt;). Of note is that TMP colors always are eight hex digits long, since they
include the alpha. The alpha is *always* {0}(FF) for {hackmud}. The color code is never wrapped in quotes or other
delimiters.

Unlike {hackmud} coloring, TMP tags can be nested.
The game liberally nests formatting, so a direct conversion to in-game color codes is not of much use. This article
therefore mostly uses TMP tags for coloring.

## GC formatting

GC formatting is by far the most complex. It has many quirks, especially when translated into a language other than
C#. The regex also has two variants, one for the start of a string and one for in the middle of the text. The behavior
of these differs in that the latter requires a non-letter both before {d}(and) after the GC string. This implies that
a GC string will not be colored at the end of a string, unless it is the only content of the string.

On a high level, the game checks for the presence of a GC string in a line of text. A GC string has an optional minus
sign in the front, followed by none or more segments of digits with certain letters after them. The none or more part
also implies that the string "{c}(GC)" is a valid GC string. If the GC string appears at the start of a string, it can
have any (or indeed no) character immediately after it, so "{c}(GC)A" is valid. This is not the case when it appears in
the middle of a string, where both the character immediately before and after it have to be non-word[^1] characters.
Thus, neither " GC", "AGC", "AGCA" nor "AGCÄ" are considered valid GC strings, but "A {c}(GC)!" is.

[^1]: Note: What is and isn't a non-word character is determined by .NET's {0}(\W) regex character class. In practice,
it just means that letters of any scripts (i.e. letters of any languages), digits and a handful of special characters,
chiefly {0}(_), are disallowed, but most other characters can appear there.
The JavaScript equivalent for .NET's {0}(\W) class is {0}([^\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}]).
For more info on this, refer to the <a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#word-character-w">.NET regex documentation</a>.

If it finds a valid GC string, it starts a color tag with the number coloring for digits in GC strings, namely {b}(B),
hex {b}(#CACACAFF). It then goes through each segment (e.g. {b}(381){j}(B)) and colors the individual letter. This
coloring is nested inside the tag for the digit coloring. All numbers can be one to three digits long, apart from the
number in front of the quadrillion's place {d}(Q), which can be one to five digits long. Every segment letter has a
color associated with it, even the one's place. In practice however, the associated color for the one's place is
#101215, the background color of the shell. Since it also has no letter associated with it, it will not show up in-game
in any way, but a tag is still generated for it.

### Double-formatting of "GC"

Since there are two regexes used for coloring GC, there is possibility for interactions between them. And indeed,
{v}(every) GC string at the {v}(start) of a string is formatted twice, though only in part.

What follows is the output of the first regex formatting of the string "1GC". The actual output does not have any
indentation or even spaces between the tags. Matching tags are colored, though the colors don't correspond to their
in-game appearance.

{0}(&lt;color=#CACACAFF&gt;)<br>
&ensp;&ensp;&ensp;&ensp;1<br>
&ensp;&ensp;&ensp;&ensp;{1}(&lt;color=#101215FF&gt;&lt;/color&gt;)<br>
{0}(&lt;/color&gt;)<br>
{2}(&lt;color=#9B9B9BFF&gt;)<br>
&ensp;&ensp;&ensp;&ensp;GC<br>
{2}(&lt;/color&gt;)

Notice that there is an uninterrupted occurrence of "GC" inside the output, surrounded by non-word characters, namely
{2}(&gt;) and {2}(&lt;). This means that the second regex will recognize the occurrence as another valid GC string
and wraps it in another layer of formatting. The end result looks like this:

{0}(&lt;color=#CACACAFF&gt;)<br>
&ensp;&ensp;&ensp;&ensp;1<br>
&ensp;&ensp;&ensp;&ensp;{1}(&lt;color=#101215FF&gt;&lt;/color&gt;)<br>
{0}(&lt;/color&gt;)<br>
{2}(&lt;color=#9B9B9BFF&gt;)<br>
&ensp;&ensp;&ensp;&ensp;{3}(&lt;color=#CACACAFF&gt;&lt;/color&gt;){4}(&lt;color=#9B9B9BFF&gt;)GC{4}(&lt;/color&gt;)<br>
{2}(&lt;/color&gt;)

The structure is the same, but "GC" is wrapped in an additional color tag, as well as being preceded by another, empty
tag that would have been responsible for coloring the digits.

Note that this can only happen if the string appears at the very start of a string. If it didn't, then the first regex
wouldn't match, thus the formatting wouldn't be applied.

## JavaScript-compatible regexes

These regexes can be used to parse GC strings in the same way the game does.
To be able to make sense of these at all, they are split over several lines. If you want to use these,
you have to remove the line breaks. Also note the use of the {0}(gv) flags, which are required for the regexes to have
the same behavior as in .NET.

This regex matches GC strings at the start of strings:

{1}(/)<br>
^(-)?<br>
{d}((?:(\d{1,5})Q)?)<br>
{t}((?:(\d{1,3})T)?)<br>
{j}((?:(\d{1,3})B)?)<br>
{l}((?:(\d{1,3})M)?)<br>
{n}((?:(\d{1,3})K)?)<br>
{b}((\d{1,3})?GC)<br>
{1}(/gv)

This regex matches GC strings in the middle of strings. The long character classes are equivalent to .NET's {0}(\W)
character class. (Thanks, Fayti!)<br>
For more info on this, refer to the <a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#word-character-w">.NET regex documentation</a>.

{1}(/)<br>
{0}(([^\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}]))<br>
(-)?<br>
{d}((?:(\d{1,5})Q)?)<br>
{t}((?:(\d{1,3})T)?)<br>
{j}((?:(\d{1,3})B)?)<br>
{l}((?:(\d{1,3})M)?)<br>
{n}((?:(\d{1,3})K)?)<br>
{b}((\d{1,3})?GC)<br>
{0}(([^\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}]))<br>
{1}(/gv)
