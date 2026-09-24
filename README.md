# {hackmud} wiki

Welcome to the repo for an unofficial {hackmud} wiki!

## The idea

This wiki is very different from the official one, as it's intended to be a collection of more or less everything that
goes on in the mud. This also means that the wiki is full of spoilers, even at this early stage, so be warned!

I (Sarah) started playing in January 2025, stayed for about half a year, and then quit. Recently I came back,
and I've noticed that I have to basically rediscover the entire game, since there is so little info on anything
other than locks on the official wiki. I recognize that it may be an intentional choice, but I'd like something a
little more substantial. Since that didn't really exist yet, I'm starting the work myself!

### Things to eventually read about on the wiki

- core gameplay mechanics
  - Locks
  - Upgrades
  - Script behavior (i.e., things to do and avoid in scripts)
- the story
- NPCs, both well-known ones and more obscure ones
- poetry from within the mud
- fictional corps
- script outputs from NPCs and fictional corps
  - an example that already exists: `aon.memb3rs_only`

These things are to be determined if they fit on the wiki (I have put *zero* thought into this.):
- info about well-known players and player corps
- useful scripts other people have made

## Local setup

```bash
$ pnpm install
$ pnpm approve-build # Maybe you need this, maybe you don't.
$ pnpm run serve
```

The wiki will now be hosted at https://localhost:8080/.

## No AI policy

This project will never use generative AI in any way to aid development. This applies to everything: code, articles,
translations, READMEs, and so on. Please refrain from using AI to write issues or pull requests, they will probably
be deleted.

## Acknowledgements

Right now, the wiki uses the wonderful [Fira Code](https://github.com/tonsky/FiraCode) font that's
licensed under the OFL1.1. See their repo for more info on the license!

## Licensing

The original wiki at https://wiki.hackmud.com/ uses the CC BY-NC-SA 4.0 license. It is a fine license, but I haven't
figured out if I want to carry that license over from it. As such, **no** content, whether textual or code, has been
copied at all from the official wiki. This also means that if you want to add an article, you may not copy *anything*
from the official wiki either.

Also, this project is neither affiliated with nor endorsed by ComCode. :)
