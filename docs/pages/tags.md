---
layout: default
permalink: /tags/
---
# Tags
<ul class="list-group list-group-flush">
  {% assign parents = site.tags | where: "parent", "None" | sort %}
  {% for parent in parents %}
    <li class="list-group-item">{{ parent.name }}</li>
    <ul class="list-group list-group-flush">
      {% assign children = site.tags | where: "parent", parent.name | sort %}
      {% for child in children %}
        <li class="list-group-item">{{ child.name }} <span class="badge bg-primary rounded-pill">14</span></li>
      {% endfor %}
    </ul>
  {% endfor %}
</ul>
