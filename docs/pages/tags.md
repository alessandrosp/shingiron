---
layout: default
permalink: /tags/
---
# Tags
<ul class="list-group list-group-flush">
  {% assign parents = site.tags | where: "parent", "None" | sort %}
  {% for parent in parents %}
    {% assign children = site.tags | where: "parent", parent.name | sort %}
    <li class="list-group-item"><b>{{ parent.name }}</b> <span class="badge bg-primary rounded-pill">{{ children.size }} TAGS</span></li>
    <ul class="list-subgroup">
      {% for child in children %}
        <li class="list-subgroup-item">{{ child.name }} {{ child.emoji }}</li>
      {% endfor %}
    </ul>
  {% endfor %}
</ul>
