---
layout: items
title: Blog
subtitle: Blog index
permalink: /posts/
---

{% for post in site.posts %}
{% include post_item.html %}
{% endfor %}
