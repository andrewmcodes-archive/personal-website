---
layout: home
title: Projects
---

 {% rendercontent "shared/section" %}
  {% with subtitle %}A small sample of some of the projects I maintain.{% endwith %}
  {% with title %}Maintainer{% endwith %}
  {% with content %}
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-3">
    {% for repo in site.data.projects.maintain %}
    <object type="image/svg+xml" data="{{ repo.url }}"></object>
    {% endfor %}
  </div>
  {% endwith %}
{% endrendercontent %}

{% rendercontent "shared/section" %}
  {% with subtitle %}A small sample of some of the projects I have contributed to.{% endwith %}
  {% with title %}Contributor{% endwith %}
  {% with content %}
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-3">
    {% for repo in site.data.projects.contributor %}
    <object type="image/svg+xml" data="{{ repo.url }}"></object>
    {% endfor %}
  </div>
  {% endwith %}
{% endrendercontent %}

{% rendercontent "shared/section" %}
  {% with subtitle %}A sample of some live projects I have contributed to.{% endwith %}
  {% with title %}Live{% endwith %}
  {% with content %}
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-3">
    {% for project in site.data.projects.production %}
      <div class="overflow-hidden bg-white shadow-md">
        <a class="block px-4 py-5 sm:p-6" href="{{ project.url }}" target="_blank">
          <dl>
            <dt class="mb-1 text-3xl font-semibold leading-9 text-gray-900">
              {{ project.name }}
            </dt>
            <dd class="text-sm font-medium leading-5 text-gray-500 truncate">
              {{ project.description }}
            </dd>
          </dl>
        </a>
      </div>
    {% endfor %}
    </div>
  {% endwith %}
{% endrendercontent %}
