---
title: Ruby on Rails Podcast
name: ruby_on_rails_podcast
subtitle: A weekly exploration into the people who make Ruby what it is.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/v1593758052/podcasts/ruby-on-rails-podcast_neglde.jpg
show_url: http://5by5.tv/rubyonrails
description: The Ruby on Rails Podcast, a weekly conversation about Ruby on
  Rails,open source software, and the programming profession. Hosted by
  Brittany Martin.
priority: 4
episodes:
  - title: "320: ViewComponents in Action with Andrew Mason"
    url: https://5by5.tv/rubyonrails/320
    date: 2020-05-27 11:00:00.000000000 Z
---

{% assign episodes = page.episodes | sort: "date" | reverse %}
{% for episode in episodes %}
{% render "shared/list_item", url: episode.url, text: episode.title %}
{% endfor %}
