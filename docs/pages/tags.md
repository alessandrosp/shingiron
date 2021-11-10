---
layout: default
permalink: /tags/
---
{% for tag in site.tags %}
  {{ tag.name }}
{% endfor %}
