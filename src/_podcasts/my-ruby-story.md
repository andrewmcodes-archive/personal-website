---
name: "my_ruby_story"
title: My Ruby Story
subtitle: A weekly exploration into the people who make Ruby what it is.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/v1593758052/podcasts/my-ruby-story.jpg
show_url: http://devchat.tv/my-ruby-story
description: A weekly exploration into the people who make Ruby what it is.
priority: 6
episodes:
  - title: "MRS 074: Andrew Mason"
    url: https://devchat.tv/my-ruby-story/mrs-074-andrew-mason/
    date: 2019-01-24 10:02:00.000000000 Z
---

{% for episode in page.episodes %}
{% render "shared/list_item", url: episode.url, text: episode.title %}
{% endfor %}
