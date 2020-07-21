---
layout: blog
title: Podcasts
permalink: /podcasts/
---

<div class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
  {% for show in site.data.podcasts.shows %}
    {% render "cards/podcast", show: show %}
  {% endfor %}
</div>
