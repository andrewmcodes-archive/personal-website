---
title: The Ruby Testing Podcast
subtitle: Ruby testing discussions with Jason Swett
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/ruby-testing-podcast.jpg
url: https://www.codewithjason.com/ruby-testing-podcast/
description: "On the Ruby Testing Podcast we discuss how to get started with testing as well as how to write better, more effective tests."
priority: 7
layout: episode
---

{% for episode in site.data.podcasts.the_ruby_testing_podcast.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
