---
layout: home
---

<div class="bg-white-50">
{% render "home/hero" %}
{% render "home/tiles" %}
</div>


{% assign episode_count = 0 %}
{% for podcast in site.data.podcasts %}
  {% assign count = podcast.last | map: "episodes" | map: "title" | size %}
  {% assign episode_count = episode_count | plus: count %}
{% endfor %}

{% assign post_count = site.posts | size %}
{% render "home/cta", post_count: post_count, podcast_count: episode_count %}

<!-- Blog Section -->
{% rendercontent "shared/section" %}
  {% with toptitle %}
    Blog Posts
  {% endwith %}

  {% with title %}
    Read My Latest Posts
  {% endwith %}

  {% with content %}
    {% rendercontent "shared/grid" %}
      {% for post in site.posts limit:3 %}
        {% render "shared/blog_post_card", post: post %}
      {% endfor %}
    {% endrendercontent %}
    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
      <a href="{{ site.data.social.devto.url }}" class="block-btn-secondary" target="_blank">View On DEV</a>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <a href="/blog" class="block-btn">View All Posts</a>
      </div>
    </div>
  {% endwith %}
{% endrendercontent %}
