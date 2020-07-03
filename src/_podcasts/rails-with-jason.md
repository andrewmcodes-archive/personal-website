---
title: Rails with Jason
subtitle: On Rails with Jason I talk with Rails developers about how they work with Rails.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/rails-with-jason.jpg
url: https://www.codewithjason.com/rails-with-jason-podcast
description: "On Rails with Jason I talk with Rails developers about how they work with Rails. Guests include people like Ben Orenstein and Noel Rappin."
priority: 5
layout: episode
---

{% for episode in site.data.podcasts.rails_with_jason.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
