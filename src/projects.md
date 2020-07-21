---
layout: default
title: Projects
permalink: /projects/
---
{% assign oss_projects = site.data.projects.oss %}
{% assign oss_maintainer_projects = oss_projects | where: 'involvement', 'maintainer' %}
{% assign oss_creator_projects = oss_projects | where: 'involvement', 'creator' %}

<div class="bg-pink-600">
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
        This page is under construction
      </h2>
      <p class="mt-3 text-xl leading-7 text-pink-100 sm:mt-4">
        I am not quite finished updating the data on this page. Checkout my
        <a class="underline" target="_blank" href="https://github.com/andrewmcodes">GitHub</a>
        to see more!
      </p>
    </div>
  </div>
</div>
<section class="py-10">
  {% render "shared/header", text: "Projects" %}
  <article>
    {% rendercontent 'shared/container', variation: 3 %}
      <div class="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {% for project in oss_creator_projects %}
          <a href="{{ project.url }}" target="_blank" class="flex items-center col-span-1 transition-transform duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow sm:shadow-md md:shadow-lg hover:-translate-y-2 hover:shadow-xl">
              <div class="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium leading-5 text-center text-gray-800 ">
                {% svg "assets/images/logos/{{ project.icon }}.svg" %}
              </div>
              <div class="flex-1 px-4 py-2">
                <h4 class="text-sm font-medium leading-5 text-gray-900">{{ project.name }}</h4>
                <p class="text-sm leading-5 text-gray-500 text-wrap">{{ project.subtitle }}</p>
              </div>
          </a>
        {% endfor %}
      </div>
    {% endrendercontent %}
  </article>
</section>
