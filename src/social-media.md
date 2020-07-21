---
layout: default
title: Social Media
permalink: /social-media/
---

<section class="py-10">
  {% render "shared/header", text: "Social Media" %}
  <article>
    {% rendercontent 'shared/container', variation: 3 %}
      <ul class="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {% for resource in site.data.links.socials %}
          {% render "cards/social_media", resource: resource, site: site %}
        {% endfor %}
      </ul>
    {% endrendercontent %}
  </article>
</section>

<section class="py-10">
  {% render "shared/header", text: "Visual Media" %}
  <article>
    {% rendercontent 'shared/container', variation: 3 %}
      <ul class="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {% for resource in site.data.links.media %}
          {% render "cards/social_media", resource: resource, site: site %}
        {% endfor %}
      </ul>
    {% endrendercontent %}
  </article>
</section>

<section class="py-10">
  {% render "shared/header", text: "Developer" %}
  <article>
    {% rendercontent 'shared/container', variation: 3 %}
      <ul class="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {% for resource in site.data.links.developer %}
          {% render "cards/social_media", resource: resource, site: site %}
        {% endfor %}
      </ul>
    {% endrendercontent %}
  </article>
</section>
