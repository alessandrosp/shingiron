---
layout: default
permalink: /tags/
---
# Tags
<ul>
  {% for parent in site.tags | where: "parent", "None" %}
    <li>{{ parent.name }}</li>
    <ul>
      {% for tag in site.tags | where: "parent", parent.name %}
        <li>{{ tag.name }}</li>
      {% endfor %}
    <ul>
  {% endfor %}
</ul>
