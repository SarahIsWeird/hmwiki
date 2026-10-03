---
layout: 'base'
title: 'DATA_CHECK'
tags:
  - locks
---

# DATA_CHECK

> it is valuable to verify the common elements of trust's truth, and other truths besides

DATA_CHECK locks are a line of locks spanning several tiers that requires knowledge of the mud. It was introduced
into the domain by the {n}(operator) {q-dark}(eve).

## Behavior

When being passed an invalid answer, like an empty string {v}(""), DATA_CHECK will respond with
three sentences containing placeholders. To solve the lock, the correct responses to each one must be passed to the
lock, in all lowercase and concatenated without spaces.

There are 4 tiers of the DATA_CHECK lock. When rotated, a DATA_CHECK lock will choose three random questions, it
chooses these either from the pool of it's tier or from one tier above.

The chance it chooses from the higher pool is based on the {n}(acc_mod) of the upgrade.

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

| prompt                                                                                               | answer                   | tier               |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| a ++++++ is a household cleaning device with a rudimentary networked sentience                       | robovac                  | {1}(1)             |
| user ++++++ provides instruction via script                                                          | teach                    | {1}(1)             |
| users gather in channel CAFE to share ++++++                                                         | poetry                   | {1}(1)             |
| safety depends on the use of scripts.++++++                                                          | get_level                | {1}(1)             |
| user 'on_th3_1ntern3ts' has ++++++ many things                                                       | heard                    | {1}(1)             |
| "did you know" is a communication pattern common to user ++++++                                      | fran_lee                 | {1}(1)             |
| pet, pest, plague and meme are accurate descriptors of the ++++++                                    | bunnybat                 | {1}(1)             |
| user ++++++ uses the port epoch environment to request gc                                            | outta_juice              | {1}(1)             |
| communications issued by user ++++++ demonstrate structural patterns associated with humor           | sans_comedy              | {1}(1)             |
| service ++++++ provides atmospheric updates via the port epoch environment                           | weathernet               | {1}(1)             |
| according to trust, ++++++ is more than just following directives                                    | sentience                | {1}(1)             |
| this fact checking process is a function of ++++++, the monitor                                      | eve                      | {1}(1)             |
| a person called anja has lost her ++++++                                                             | blazer                   | {2}(2)             |
| according to skimmerite pattern-seekers, the calibration initiative indicates that humans are ++++++ | dead                     | {2}(2)             |
| according to the calibration initiative, humans are expected to be ++++++ by the content             | engaged                  | {2}(2)             |
| according to the suborbital bulletin, flight ++++++ is en route to ho chi minh                       | a2231                    | {2}(2)             |
| archaic labs specialises in user-++++++ design                                                       | obsessive                | {2}(2)             |
| conditions are clear above ++++++ and the city is within operational radius                          | atlanta                  | {2}(2)             |
| data does not contain truth is the first part of an idiom spread by the ++++++ assembly              | skimmerite               | {2}(2)             |
| drones from ++++++ may be instructed to perform their task with excessive urgency                    | goodfellow               | {2}(2)             |
| item_id py6874 contains a grand ++++++                                                               | piano                    | {2}(2)             |
| robovac\_++++++, moreso than most of its kind, has a tendency to become stuck                        | idp1p1                   | {2}(2)             |
| robovac_idk3w2 is stuck in a ++++++                                                                  | well                     | {2}(2)             |
| sheriff nub holds sway over the town of ol' ++++++                                                   | nubloopstone             | {2}(2)             |
| sheriff nub's first name is ++++++                                                                   | sheriff                  | {2}(2)             |
| the ascent of ++++++ does not concern itself with usefulness                                         | nowhere                  | {2}(2)             |
| the fourth hidden theme is ++++++                                                                    | executives               | {2}(2)             |
| the listed components of the breakfast galleon are inside, outside, and ++++++                       | crowsnest                | {2}(2)             |
| this council of 'revolutionary' robovac-patterns call themselves the ++++++                          | thirteen                 | {2}(2)             |
| trust has a diagnostic system. a functioning version can be found at erajbhandari.++++++             | diagalpha                | {2}(2)             |
| user ++++++ would leave no stars for the sqrz 480 if they could                                      | bnnyhunter               | {2}(2)             |
| user le_mon_squeezy's new s:o ref is ++++++                                                          | unvarnishedpygmyumbrella | {2}(2)             |
| in trust's vLAN, you became one of angie's ++++++                                                    | angels                   | {c-dark}(disabled) |
| in trust's vLAN, you became one of mallory's ++++++                                                  | minions                  | {c-dark}(disabled) |
| in trust's vLAN, you discovered that mallory and che are ++++++                                      | sisters                  | {c-dark}(disabled) |
| in trust's vLAN, you encountered the will of ++++++, the prover                                      | petra                    | {c-dark}(disabled) |
| in trust's vLAN, you visited faythe's ++++++                                                         | fountain                 | {c-dark}(disabled) |
| in trust's vLAN, you were required to hack halperyon.++++++                                          | helpdesk                 | {c-dark}(disabled) |
| trust's vLAN emphasized the importance of the transfer and capture of ++++++                         | resource                 | {c-dark}(disabled) |
| trust's vLAN presented a version of angie who had lost a friend called ++++++                        | bo                       | {c-dark}(disabled) |
