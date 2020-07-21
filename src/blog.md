---
layout: blog
title: Blog
permalink: /blog/
pagination:
  enabled: true
---

<div class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
  {% for post in paginator.documents %}
    {% render "blog/post_card", post: post %}
  {% endfor %}
</div>
<div class="mt-8 md:mt-8">
  {% render "shared/paginator", paginator: paginator %}
</div>
