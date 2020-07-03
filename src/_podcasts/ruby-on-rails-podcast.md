---
title: Ruby on Rails Podcast
subtitle: A weekly exploration into the people who make Ruby what it is.
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/c_scale,q_auto:good,w_640/v1593758052/podcasts/ruby-on-rails-podcast_neglde.jpg
url: http://5by5.tv/rubyonrails
description: "The Ruby on Rails Podcast, a weekly conversation about Ruby on Rails,open source software, and the programming profession. Hosted by Brittany Martin."
priority: 4
layout: episode
---

{% for episode in site.data.podcasts.ruby_on_rails_podcast.episodes %}
  <li>
      {% render "podcasts/episode", title: episode.title, date: episode.date, url: episode.url %}
  </li>
{% endfor %}
