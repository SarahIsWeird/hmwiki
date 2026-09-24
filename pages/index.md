---
title: "{hackmud} wiki"
layout: "base.liquid"
templateEngineOverride: liquid,md
---
# Welcome to the unofficial {hackmud} wiki!

## [NPCs](/npcs)

{% for page in collections.npcs %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}
