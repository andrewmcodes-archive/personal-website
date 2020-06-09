---
layout: page
title: Blog
subtitle: Blog index
permalink: /posts/
---

<section class="text-gray-500 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
    {% for post in site.posts %}
    {% include post_item.html %}
    {% endfor %}
    </div>
  </div>
</section>
