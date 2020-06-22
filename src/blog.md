---
layout: page
title: Blog
---

<section class="p-4">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
    {% for post in site.posts %}
    {% render "shared/blog_post_card", post: post %}
    {% endfor %}
  </div>
</section>
