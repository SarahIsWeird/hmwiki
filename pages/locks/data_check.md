---
layout: "base"
title: "DATA_CHECK"
---
# DATA_CHECK

> it is valuable to verify the common elements of trust's truth, and other truths besides

DATA_CHECK locks are a line of locks spanning several tiers that requires knowledge of the mud. The makers are
currently unknown.

## Behavior

When being passed an invalid answer, like an empty string {v}(""), DATA_CHECK will respond with
three sentences containing placeholders. To solve the lock, the correct responses to each one must be passed to the
lock, in all lowercase and concatenated without spaces.

<hr>

## Example solve

> {a}(>>){c}(example){a}(.){l}(loc) {a}({})
> 
> {v}(LOCK_ERROR)
> 
> Denied access by {n}(DATA_CHECK) lock.
> 
> <br>
> 
> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(DATA_CHECK){a}(:) {v}("") {a}(})
> 
> a ++++++ is a household cleaning device with a rudimentary networked sentience
> 
> safety depends on the use of scripts.++++++
> 
> pet, pest, plague and meme are accurate descriptors of the ++++++
> 
> <br>
> 
> {a}(>>){c}(example){a}(.){l}(loc) {a}({) {n}(DATA_CHECK){a}(:) {v}("robovacget_levelbunnybat") {a}(})
> 
> {n}(LOCK_UNLOCKED)
> 
> System example breached.
> 
> Connection terminated.

<hr>

## Prompts

| prompt                                                                                     | answer      | tier   |
|--------------------------------------------------------------------------------------------|-------------|--------|
| a ++++++ is a household cleaning device with a rudimentary networked sentience             | robovac     | {1}(1) |
| user ++++++ provides instruction via script                                                | teach       | {1}(1) |
| users gather in channel CAFE to share ++++++                                               | poetry      | {1}(1) |
| safety depends on the use of scripts.++++++                                                | get_level   | {1}(1) |
| user 'on_th3_1ntern3ts' has ++++++ many things                                             | heard       | {1}(1) |
| "did you know" is a communication pattern common to user ++++++                            | fran_lee    | {1}(1) |
| pet, pest, plague and meme are accurate descriptors of the ++++++                          | bunnybat    | {1}(1) |
| user ++++++ uses the port epoch environment to request gc                                  | outta_juice | {1}(1) |
| communications issued by user ++++++ demonstrate structural patterns associated with humor | sans_comedy | {1}(1) |
| service ++++++ provides atmospheric updates via the port epoch environment                 | weathernet  | {1}(1) |
