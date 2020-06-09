---
layout: project
title: Projects
subtitle: Projects index
permalink: /projects/
---

<div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
  {% for project in site.data.projects %}
    {% include projects/project_item.html %}
  {% endfor %}
</div>
