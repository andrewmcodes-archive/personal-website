---
layout: home
---

<!-- Hero Section -->
{% render "home/hero" %}

<!-- {% rendercontent "shared/section", type: "white" %}
  {% with subtitle %}
    A subtitle
  {% endwith %}

  {% with title %}
    A title
  {% endwith %}

  {% with content %}
    {% rendercontent "shared/grid" %}
      {% for tile in site.data.home.tiles %}
      {% render "shared/tile", icon: tile.icon, title: tile.title, details: tile.details, url: tile.url %}
      {% endfor %}
    {% endrendercontent %}
  {% endwith %}
{% endrendercontent %} -->


<!-- CTA Section -->

{% render "home/cta" %}


<!-- Tiles Section -->
{% render "home/tiles" %}
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

<!-- CTA Section -->
{% render "shared/subscribe" %}
