---
title: Remote Ruby
subtitle: Three Rubyists having conversations and interviewing others about Ruby and web development..
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/remote-ruby.jpg
url: https://remoteruby.transistor.fm
description: Three Rubyists having conversations and interviewing others about Ruby and web development.
priority: 2
layout: episode
---

{% for episode in site.data.podcasts.remote_ruby.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
