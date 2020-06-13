---
layout: page
title: Blog
---

<section class="px-4 py-12">
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
    {% for post in site.posts %}
    {% render "shared/blog_post_card", post: post %}
    {% endfor %}
  </div>
</section>
