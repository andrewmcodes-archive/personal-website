---
layout: default
title: Podcasts
subtitle: Podcasts index
permalink: /podcasts/
---

<div class="py-12 bg-white">
  <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
        Transactions
      </p>
      <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Panelist
      </h3>
      <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        {% for podcast in site.data.podcasts.panelist %}
          {% include podcasts/panelist_item.html %}
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">Transactions
      </p>
      <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Guested
      </h3>
      <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
       {% for podcast in site.data.podcasts.guest %}
          {% include podcasts/guest_item.html %}
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
