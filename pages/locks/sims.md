---
layout: "base"
title: "Lock sims"
---
# Lock sims

Lock simulators or lock sims are user-made scripts that simulate locks. Some of them only simulate {0}(tier 1) locks,
but some also simulate high-tier locks. While the authors usually take care to simulate locks as accurately as
possible, care must be taken to also test solvers on real locs, as lock sims might not be 100% accurate.

## {c}(dtr){a}(.){l}(t1_lock_sim)

{c}(dtr){a}(.){l}(t1_lock_sim) is a well-known lock sim that has been around for a long time. It accurately simulates
most {0}(tier 1) locks, except for [DATA_CHECK](/locks/data_check). Since the lock sim was made and dtr, the author,
has left the mud before the removal of the vLAN, the prompts still reference content from it. It is thus not very
useful to test out DATA_CHECK answers. Since the formatting of the questions has stayed the same, it could nonetheless
be useful to test parsing of prompts.

> {a}(>>){c}(dtr){a}(.){l}(t1_lock_sim) {a}({) {n}(help){a}(:) {v}(true) {a}(})
> 
> To set up a new lock sim, {c}(dtr).{l}(t1_lock_sim) { {n}(locks):{v}(\[)"ez_21","c003"]}
> 
> You can use {c}(dtr).{l}(t1_lock_sim) { {n}(locks):{v}("random")\} for a random set of locks (possibly empty).
> 
> <br>
> 
> To set a w4rn_message, include the w4rn lock,
> 
> {c}(dtr){a}(.){l}(t1_lock_sim) { {n}(locks){a}(:){v}([)"ez_21","c003","w4rn"],{n}(w4rn_message):{v}("This was a triumph")}
> 
> The default message is used if none is specified
> 
> <br>
> 
> Usable locks:
> 
> \*  ez_21
>
> \*  ez_35
>
> \*  ez_40
>
> \*  c001
>
> \*  c002
>
> \*  c003
>
> \*  l0cket
>
> \*  w4rn
>
> \*  w4rn_er
>
> \*  con_tell
>
> \*  data_check_v1
