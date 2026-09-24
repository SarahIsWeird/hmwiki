---
layout: "base"
title: "NPCS"
templateEngineOverride: liquid,md
---
# NPCs

{% for page in collections.npcs %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}
