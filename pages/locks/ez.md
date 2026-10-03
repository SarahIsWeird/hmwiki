---
layout: "base"
title: "EZ locks"
tags:
  - locks
---
# EZ locks

The EZ locks are a line of {0}(tier 1) [locks](/locks) made by Halperyon Systems. Conceptually, they are one of the
easiest locks to solve, but later models often require a significant amount of calls due to their brute-force nature.

A quirk of all EZ locks is that both the argument keys {5}(and) values are case-insensitive. This is similar to the
[CORE c line](/locks/c), though for those, the argment {n}(keys) are case-sensitive, unlike for the EZ locks.

They are both referred to in lowercase (e.g. ez_21) and uppercase (e.g. EZ_21) by both the game and the community.
Note that some places (especially user scripts) do not share this behavior and expect a specific capitalization,
usually lowercase.

<hr>

## EZ_21

> From the Halperyon Systems' EZ line comes the 21. A very unexceptional lock, unless you count the price: dirt-cheap.

EZ_21 is the first lock in the EZ line. It is also the first lock the player is introduced to, as well as
the easiest to solve.

### Behavior

Like all locks in the EZ line, EZ_21 expects one of three keywords to be given as an argument {n}(ez_21)/{n}(EZ_21):
- open
- unlock
- release

It does not need any additional arguments to be opened, finding the correct one of the three suffices.

### Example unlock

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
>
> {v}(LOCK_ERROR)
>
> Denied access by HALPERYON SYSTEMS {n}(EZ_21) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_21){a}(:) {v}("open") {a}(})
>
> {v}(LOCK_ERROR)
>
> {v}("open") is not the correct unlock command.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_21){a}(:) {v}("release") {a}(})
>
> {n}(LOCK_UNLOCKED)
>
> System example breached.
>
> Connection terminated.

<hr>

## EZ_35

> Halperyon Systems' EZ 35. A step up from the 21, but not much.

EZ_35 is the second lock in the EZ line.

### Behavior

Like all locks in the EZ line, EZ_35 expects one of three keywords to be given as an argument {n}(ez_35)/{n}(EZ_35):
- open
- unlock
- release

Additionally, it expects an argument {n}(digit). The correct value is a random number between {v}(0) and {v}(9)
inclusive (i.e., a digit).

### Example unlock

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
>
> {v}(LOCK_ERROR)
>
> Denied access by HALPERYON SYSTEMS {n}(EZ_35) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_35){a}(:) {v}("open") {a}(})
>
> {v}(LOCK_ERROR)
>
> {v}("open") is not the correct unlock command.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_35){a}(:) {v}("unlock") {a}(})
>
> {v}(LOCK_ERROR)
>
> Required unlock parameter {n}(digit) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_35){a}(:) {v}("unlock"){a}(,) {n}(digit){a}(:) {v}(0) {a}(})
>
> {v}(LOCK_ERROR)
>
> 1 is not the correct digit.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_35){a}(:) {v}("unlock"){a}(,) {n}(digit){a}(:) {v}(1) {a}(})
>
> {n}(LOCK_UNLOCKED)
>
> System example breached.
>
> Connection terminated.

<hr>

## EZ_40

> Halperyon Systems' EZ 40. Wait, I can't remember if 1 is prime or not.

EZ_40 is the third and final lock of the EZ line. Even though it is conceptually only a small step up from
EZ_35, it is one of the hardest locks to solve as it can take many attempts to do so. As such, it is a lock many new
players have difficulties with (due to script timeout). Because of the potential for a long solve time, it is usually
considered one of the best locks in the game.

### Behavior

Like all locks in the EZ line, EZ_40 expects one of three keywords to be given as an argument {n}(ez_40)/{n}(EZ_40):
- open
- unlock
- release

Additionally, it expects an argument {n}(ez_prime), randomly chosen from the first 25(?) prime numbers. As hinted
towards in the lock description, {v}(1) is not considered a prime number in mathematics and therefore will not show
up as a possible {n}(ez_prime).

### Example solve

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
> 
> {v}(LOCK_ERROR)
> 
> Denied access by HALPERYON SYSTEMS {n}(EZ_40) lock.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_40){a}(:) {v}("release") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}("release") is not the correct unlock command.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_40){a}(:) {v}("open") {a}(})
> 
> {v}(LOCK_ERROR)
> 
> Required unlock parameter {n}(ez_prime) is missing.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_40){a}(:) {v}("open"){a}(,) {n}(ez_prime){a}(:) {v}(2) {a}(})
> 
> {v}(LOCK_ERROR)
> 
> {v}(2) is not the correct prime.

> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(ez_40){a}(:) {v}("open"){a}(,) {n}(ez_prime){a}(:) {v}(3) {a}(})
> 
> {n}(LOCK_UNLOCKED)
> 
> System example breached.
> 
> Connection terminated.
