---
layout: blog
title: Blog
permalink: /posts/
pagination:
  enabled: true
---

{% rendercontent 'shared/grid' %}
  {% for post in paginator.documents %}
    {% render "cards/post", post: post %}
  {% endfor %}
{% endrendercontent %}

<div class="mt-8 md:mt-8">
  {% render "shared/paginator", paginator: paginator %}
</div>
