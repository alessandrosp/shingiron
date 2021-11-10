---
layout: default
permalink: /tags/
---
# Tags
<ul>
  {% assign parents = site.tags | where: "parent", "None" %}
  {% for parent in parents %}
    <li>{{ parent.name }}</li>
    <ul>
      {% assign children = site.tags | where: "parent", parent.name %}
      {% for child in children | where: "parent", parent.name %}
        <li>{{ child.name }}</li>
      {% endfor %}
    <ul>
  {% endfor %}
</ul>
