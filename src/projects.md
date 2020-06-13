---
layout: items
title: Projects
subtitle: Projects index
permalink: /projects/
---

{% for project in site.data.projects %}
{% render "projects/item", project: project %}
{% endfor %}
