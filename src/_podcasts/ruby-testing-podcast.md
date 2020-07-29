---
title: The Ruby Testing Podcast
name: ruby_testing_podcast
subtitle: Ruby testing discussions with Jason Swett
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/v1593758052/podcasts/ruby-testing-podcast.jpg
show_url: https://www.codewithjason.com/ruby-testing-podcast/
description: On the Ruby Testing Podcast we discuss how to get started with
  testing as well as how to write better, more effective tests.
episodes:
  - title: 015 - Testing Q&A with Listener Andrew Mason
    url: https://podcasts.apple.com/us/podcast/the-ruby-testing-podcast/id1385192624?i=1000422112280
    date: 2018-10-18 11:00:00.000000000 Z
priority: 7
---

{% assign show = site.data.podcasts.ruby_testing_podcast %}
{% for episode in show.episodes %}
{% render "shared/list_item", url: episode.url, text: episode.title %}
{% endfor %}
