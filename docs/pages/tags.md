---
layout: default
permalink: /tags/
---
# Tags
<ul>
  {% for parent in site.tags | where: "parent", "None" %}
    <li>{{ parent.name }}</li>
  {% endfor %}
</ul>
