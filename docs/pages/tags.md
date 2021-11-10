---
layout: default
permalink: /tags/
---
# Tags
<ul>
  {% assign parents = site.tags | where: "parent", "None" %}
  {% for parent in parents %}
    <li>{{ parent.name }}</li>
  {% endfor %}
</ul>
