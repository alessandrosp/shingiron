---
layout: default
permalink: /tags/
---
# Tags
<ul class="list-group list-group-flush">
  {% for parents in site.tags | where: "parent", "None" %}
    <li class="list-group-item">{{ parent.name }}</li>
    <ul class="list-group list-group-flush">
      {% for tag in site.tags | where: "parent", parent.name %}
        <li class="list-group-item">tag.name</li>
      {% endfor %}
    <ul>
    {{ tag.name }}
  {% endfor %}
</ul>
