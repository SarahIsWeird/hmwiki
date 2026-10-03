---
title: "{hackmud} wiki"
layout: "base.liquid"
templateEngineOverride: liquid,md
---
# Welcome to the unofficial {hackmud} wiki!

This wiki is an alternative to the clean and mostly spoiler-free [official wiki](https://wiki.hackmud.com).
Notably, you'll (eventually!) find much more information about scripts, inner workings and locks than the official
wiki. Hence: beware of spoilers!

This wiki is heavily WIP, but does already include some useful info. Start browsing in one of these:

## [Locks](/locks)

{% for page in collections.locks %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

## [NPCs](/npcs)

{% for page in collections.npcs %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

## [Ports](/ports)

{% for page in collections.ports %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

## How the game works

- [Color formatting](/internals/color_formatting)
