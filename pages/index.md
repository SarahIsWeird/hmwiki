---
title: "{hackmud} wiki"
layout: "base.liquid"
templateEngineOverride: liquid,md
---
# Welcome to the unofficial {hackmud} wiki!

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
