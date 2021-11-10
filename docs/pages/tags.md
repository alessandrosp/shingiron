---
layout: default
permalink: /tags/
---
# Tags

We use a comprehensive tagging systems to make sure all our reviews are easy to find. While the searching infrastructure is not in place yet, we plan to offer our users to possibility of searching all our reviews based on tags, city, area, etc. Stay tuned!

<ul class="list-group list-group-flush">
  {% assign parents = site.tags | where: "parent", "None" | sort %}
  {% for parent in parents %}
    {% assign subs = site.tags | where: "parent", parent.name | sort %}
    <li class="list-group-item"><b>{{ parent.name }}</b> <span class="badge bg-light text-dark">{{ subs.size }} TAGS</span></li>
    <ul class="list-subgroup">
      {% for sub in subs %}
        <li class="list-subgroup-item"><span class="place-tag badge rounded-pill bg-primary">{{ sub.name }} {{ sub.emoji }}</span></li>
      {% endfor %}
    </ul>
  {% endfor %}
</ul>
