---
title: The Ruby Blend
subtitle: A Ruby Focused Podcast for Developers
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/the-ruby-blend.jpg
url: https://www.therubyblend.com
description: The Ruby Blend is a new Ruby focused podcast bringing you panel discussions, guest interviews, and much more to keep you up to date on what’s happening in the Ruby development community mixed with sprinkles from other developer communities.
priority: 1
layout: episode
---

{% for episode in site.data.podcasts.the_ruby_blend.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
