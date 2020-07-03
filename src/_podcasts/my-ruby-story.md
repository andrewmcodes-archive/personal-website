---
title: My Ruby Story
subtitle: A weekly exploration into the people who make Ruby what it is.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/my-ruby-story.jpg
url: http://devchat.tv/my-ruby-story
description: "A weekly exploration into the people who make Ruby what it is."
priority: 6
layout: episode
---

{% for episode in site.data.podcasts.my_ruby_story.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
