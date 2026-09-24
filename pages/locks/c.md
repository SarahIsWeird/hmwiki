---
layout: "base"
title: "c locks"
---
# c locks

The c locks are a line of {0}(tier 1) [locks](/locks) made by CORE. They are some of the easiest locks to solve.
Unlike [EZ locks](/locks/ez), the difficulty of lock solves do not increase much with later models.

The description of c001 refers to the series as the 'c' line, however, most community members refer to them by
either {n}(c00x) or {n}(c00n).

A quirk of all c locks is that {v}(values) are case-insensitive. The [Halperyon Systems' EZ line](/locks/ez)
is the only other type of lock to share this behavior, though unlike EZ locks, the c locks require
{n}(keys) to be lowercase, i.e., {n}(c001), {d}(not) {n}(C001).

<hr>

## c001

> The CORE 'c' line of locks provides entry level protection for the concerned consumer. The 001 is the first
> of that line.

### Behavior

Like all locks in the c line, c001 expects one of eight colors to be given as an argument {n}(c001):
- {d}(red)
- {f}(orange)
- {j}(yellow)
- {l}(lime)
- {l-dark}(green)
- {n}(cyan)
- {p}(blue)
- {t}(purple)

Additionally, it expects an argument {n}(color_digit) that contains the amount of letters in the correct color.

### Example unlock

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
> 
> {v}(LOCK_ERROR)
> 
> Denied access by CORE {n}(c001) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c001){a}(:) {v}("red") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}("red") is not the correct color name.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c001){a}(:) {v}("purple") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> Required unlock parameter {n}(color_digit) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c001){a}(:) {v}("purple"){a}(,) {n}(color_digit){a}(:) {v}(1) {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}(0) is not the correct color digit checksum value.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c001){a}(:) {v}("purple"){a}(,) {n}(color_digit){a}(:) {v}(6) {a}(})
> 
> {n}(LOCK_UNLOCKED)
> 
> System example breached.
> 
> Connection terminated.

<hr>

## c002

> The CORE c002 adds slight protection over the 001. Still mediocre.

### Behavior

Like all locks in the c line, c002 expects one of eight colors to be given as an argument {n}(c002):
- {d}(red)
- {f}(orange)
- {j}(yellow)
- {l}(lime)
- {l-dark}(green)
- {n}(cyan)
- {p}(blue)
- {t}(purple)

Additionally, it expects an argument {n}(c002_complement) that contains the complement color of {n}(c002).
- {d}(red)&ensp;&ensp;&ensp; → {l-dark}(green)
- {f}(orange) → {n}(cyan)
- {j}(yellow) → {p}(blue)
- {l}(lime)&ensp;&ensp; → {t}(purple)
- {l-dark}(green)&ensp; → {d}(red)
- {n}(cyan)&ensp;&ensp; → {f}(orange)
- {p}(blue)&ensp;&ensp; → {j}(yellow)
- {t}(purple) → {l}(lime)

### Example unlock

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
>
> {v}(LOCK_ERROR)
>
> Denied access by CORE {n}(c002) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c002){a}(:) {v}("red") {a}(})
>
> {v}(LOCK_ERROR)
>
> {v}("red") is not the correct color name.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c002){a}(:) {v}("purple") {a}(})
>
> {v}(LOCK_ERROR)
>
> Required unlock parameter {n}(c002_complement) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c002){a}(:) {v}("purple"){a}(,) {n}(c002_complement){a}(:) {v}("red") {a}(})
>
> {v}(LOCK_ERROR)
>
> {v}("red") is not the correct complement color.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c002){a}(:) {v}("purple"){a}(,) {n}(c002_complement){a}(:) {v}("lime") {a}(})
>
> {n}(LOCK_UNLOCKED)
>
> System example breached.
>
> Connection terminated.

<hr>

## c003

> c003 from CORE. Additional complexity, additional cost.

### Behavior

Like all locks in the c line, c003 expects one of eight colors to be given as an argument {n}(c003):
- {d}(red)
- {f}(orange)
- {j}(yellow)
- {l}(lime)
- {l-dark}(green)
- {n}(cyan)
- {p}(blue)
- {t}(purple)

Additionally, it expects two arguments {n}(c003_triad_1) and {n}(c003_triad_2), that are the first and second
triad colors, respectively. The values have to be provided in the correct order.

- {d}(red)&ensp;&ensp;&ensp; → {n}(cyan), &ensp;&ensp;{l}(lime)
- {f}(orange) → {p}(blue), &ensp;&ensp;{l-dark}(green)
- {j}(yellow) → {t}(purple), {n}(cyan)
- {l}(lime)&ensp;&ensp; → {d}(red), &ensp;&ensp;&ensp;{p}(blue)
- {l-dark}(green)&ensp; → {f}(orange), {t}(purple)
- {n}(cyan)&ensp;&ensp; → {j}(yellow), {d}(red)
- {p}(blue)&ensp;&ensp; → {l}(lime), &ensp;&ensp;{f}(orange)
- {t}(purple) → {l-dark}(green), &ensp;{j}(yellow)

### Example unlock

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
> 
> {v}(LOCK_ERROR)
> 
> Denied access by CORE {n}(c003) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("red") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}("red") is not the correct color name.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("purple") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> Required unlock parameter {n}(c003_triad_1) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("purple"){a}(,) {n}(c003_triad_1){a}(:) {v}("red") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}("red") is not the correct first triad color.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("purple"){a}(,) {n}(c003_triad_1){a}(:) {v}("green") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> Required unlock parameter {n}(c003_triad_2) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("purple"){a}(,) {n}(c003_triad_1){a}(:) {v}("green"){a}(,) {n}(c003_triad_2){a}(:) {v}("red") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}("red") is not the correct second triad color.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(c003){a}(:) {v}("purple"){a}(,) {n}(c003_triad_1){a}(:) {v}("green"){a}(,) {n}(c003_triad_2){a}(:) {v}("yellow") {a}(})
> 
> {n}(LOCK_UNLOCKED)
> 
> System example breached.
> 
> Connection terminated.
