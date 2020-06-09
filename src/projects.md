---
layout: items
title: Projects
subtitle: Projects index
permalink: /projects/
---

{% for project in site.data.projects %}
{% include projects/project_item.html %}
{% endfor %}
