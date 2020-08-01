---
title: The Ruby Blend
name: the_ruby_blend
priority: 1
subtitle: A Ruby Focused Podcast for Developers
image_url: https://res.cloudinary.com/andrewmcodes/image/upload/v1593758052/podcasts/the-ruby-blend.jpg
show_url: https://www.therubyblend.com
description: The Ruby Blend is a new Ruby focused podcast bringing you panel
  discussions, guest interviews, and much more to keep you up to date on
  what’s happening in the Ruby development community mixed with sprinkles
  from other developer communities.
episodes:
  - id: bac95df4-d786-4206-bd8e-99889ccdea8d
    title: "Episode 16: Playbook Thirty-nine with Nick Haskins"
    url: https://www.therubyblend.com/16
    date: 2020-06-19 20:00:00.000000000 Z
  - id: 401c86fb-af8d-4fcd-801d-cda8f5f08c7e
    title: "Episode 15: Rails Testing Tools and Best Practices with Jason Swett"
    url: https://www.therubyblend.com/15
    date: 2020-06-04 16:00:00.000000000 Z
  - id: db8ed088-fdfe-480c-964a-1d0281191302
    title: "Episode 14: Projects, Projects, Projects!!"
    url: https://www.therubyblend.com/14
    date: 2020-05-28 13:00:00.000000000 Z
  - id: 33a93495-41cd-4fa0-ad7d-dc381520d81f
    title: "Episode 13: Wait, you want to lint commit messages?!?"
    url: https://www.therubyblend.com/13
    date: 2020-05-21 12:45:00.000000000 Z
  - id: f74d1876-0234-4072-98c3-0904e2b5e92d
    title: "Episode 12: The State of the Rails Community with Julian Rubisch"
    url: https://www.therubyblend.com/12
    date: 2020-05-14 18:00:00.000000000 Z
  - id: 689b9547-91c3-4cfa-8dd0-c3213cb7c793
    title: "Episode 11: Open Source Funding and CodeFund with Eric Berry"
    url: https://www.therubyblend.com/11
    date: 2020-05-07 11:00:00.000000000 Z
  - id: 54b39da6-bf44-4c60-a0e8-d851ae929075
    title: "Episode 10: Parentheses and typosquatting"
    url: https://www.therubyblend.com/10
    date: 2020-04-30 11:00:00.000000000 Z
  - id: ec657f6e-0ba7-490b-828c-520bfaea232e
    title: "Episode 9: ViewComponent at GitHub with Joel Hawksley"
    url: https://www.therubyblend.com/9
    date: 2020-04-16 10:00:00.000000000 Z
  - id: ead4d79b-8538-416a-8a83-c5a8aad58027
    title: "Episode 8: Tests and Webpacker"
    url: https://www.therubyblend.com/8
    date: 2020-04-09 11:00:00.000000000 Z
  - id: 0cc15ada-7456-4e8e-bb10-499d33173302
    title: "Episode 7: Static Sites and Testing"
    url: https://www.therubyblend.com/7
    date: 2020-04-03 12:00:00.000000000 Z
  - id: f53640f5-912d-4fe1-9a81-98b85c9339b2
    title: "Episode 6: Working from Home"
    url: https://www.therubyblend.com/6
    date: 2020-03-26 11:00:00.000000000 Z
  - id: 68daf1d5-118f-4f68-81ed-325e2b76956a
    title: "Episode 5: Joined by Chris Oliver"
    url: https://www.therubyblend.com/5
    date: 2020-03-19 10:00:00.000000000 Z
  - id: 616fb55b-3e7c-4fe3-bb78-ec07f180d496
    title: "Episode 4: Components, HAML vs ERB, and Design Systems"
    url: https://www.therubyblend.com/4
    date: 2020-03-12 04:15:00.000000000 Z
  - id: 835e78f5-9f49-4cfe-b27b-ccbccec26627
    title: "Episode 3: HEY, Productivity, Turbolinks, and Meetings"
    url: https://www.therubyblend.com/3
    date: 2020-03-05 05:15:00.000000000 Z
  - id: a52e448b-ada9-4d18-8dc0-58046145a0f2
    title: "Episode 2: Editors, Pairing, RailsConf, and RPC"
    url: https://www.therubyblend.com/2
    date: 2020-02-27 05:15:00.000000000 Z
  - id: eb98ac19-9ae5-4ff0-9914-d89d4bb94fae
    title: "Episode 1: Hello, World!"
    url: https://www.therubyblend.com/1
    date: 2020-01-13 23:30:00.000000000 Z
---

{% assign episodes = page.episodes | sort: "date" | reverse %}
{% for episode in episodes %}
{% render "shared/list_item", url: episode.url, text: episode.title %}
{% endfor %}
