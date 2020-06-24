---
layout: page
title: About
permalink: /about/
cloudinary_id: personal/headshot
---

{% rendercontent "shared/content_layout" %}


<img alt="Andrew Mason Headshot" class="w-48 h-48 mx-auto rounded-full" src="{{ page.cloudinary_id | cloudinary_url: "medium" }}" />

- Name: Andrew Mason
- Title: Full Stack Ruby on Rails Developer
- GitHub: [andrewmcodes]({{site.data.social.github.url}})
- Twitter: [@andrewmcodes]({{site.data.social.twitter.url}})

I am a full stack developer with 2.5 years of professional experience with Ruby on Rails in small and medium sized companies. I am very curious and love tackling new problems, which has has led to many open source contributions and collaborations with developers across the globe. My passion for community involvement has lead me to writing blog posts and becoming an active podcaster.

I am a self-motivated and largely self-taught professional who likes to dig deep into problems and architect elegant solutions. When I am not at the keyboard, you will likely find me surfing or digging into a good book.

I am currently looking for my next role!

{% endrendercontent %}
