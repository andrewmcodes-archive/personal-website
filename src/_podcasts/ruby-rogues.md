---
title: The Ruby Rogues
subtitle: A weekly show about Ruby and Programming
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758053/podcasts/ruby-rogues.jpg
url: http://rubyrogues.com
description: "A weekly discussion by Ruby developers about programming, life, and careers."
priority: 3
layout: episode
---

{% for episode in site.data.podcasts.ruby_rogues.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
