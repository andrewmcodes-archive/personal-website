---
layout: home
---

<div class="bg-white-50">
{% render "home/hero" %}
{% render "home/tiles" %}
</div>
{% assign pc = site.posts | size %}
{% render "home/cta", post_count: pc %}

<!-- Blog Section -->
{% rendercontent "shared/section" %}
  {% with subtitle %}
    Latest Posts
  {% endwith %}

  {% with title %}
    From the blog
  {% endwith %}

  {% with content %}
    {% rendercontent "shared/grid" %}
      {% for post in site.posts limit:3 %}
        {% render "shared/blog_post_card", post: post %}
      {% endfor %}
    {% endrendercontent %}
    <div class="w-full mt-8 text-center">
      {% rendercontent "shared/button", url: "/blog", size: "xl" %}
        View More
      {% endrendercontent %}
    </div>
  {% endwith %}
{% endrendercontent %}
