---
layout: default
permalink: /tags/
---
# Tags
<ul>
  {% assign parents = site.tags | where: "parent", "None" | sort %}
  {% for parent in parents %}
    <li>{{ parent.name }}</li>
    <ul>
      {% assign children = site.tags | where: "parent", parent.name | sort %}
      {% for child in children %}
        <li>{{ child.name }} <span class="badge bg-primary rounded-pill">14</span></li>
      {% endfor %}
    </ul>
  {% endfor %}
</ul>
