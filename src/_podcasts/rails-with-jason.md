---
title: Rails with Jason
name: rails_with_jason
subtitle: On Rails with Jason I talk with Rails developers about how they work
  with Rails.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/v1593758052/podcasts/rails-with-jason.jpg
show_url: https://www.codewithjason.com/rails-with-jason-podcast
description: On Rails with Jason I talk with Rails developers about how they
  work with Rails. Guests include people like Ben Orenstein and Noel Rappin.
priority: 5
episodes:
  - title: Two Docker Noobs Talk About Docker - with Andrew Mason
    url: https://www.codewithjason.com/rails-with-jason-podcast/andrew-mason-docker/
    date: 2019-08-21 10:00:00.000000000 Z
---

{% assign show = site.data.podcasts.rails_with_jason %}
{% for episode in show.episodes %}
{% render "shared/list_item", url: episode.url, text: episode.title %}
{% endfor %}
