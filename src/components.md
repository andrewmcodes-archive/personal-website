---
layout: content
title: Components
permalink: /components/
exclude_from_search: true
---

{% rendercontent "table/table" %}
  {% with header %}
    <th>Name</th>
    <th>Path</th>
  {% endwith %}
  {% with rows %}
    {% assign components = site.components | sort: "component.relative_path" %}
    {% for component in components %}
      <tr>
        <td>
          <a href="{{ component.url }}">{{ component.title }}</a>
        </td>
        <td>
          <code>{{ component.component.relative_path }}</code>
        </td>
      </tr>
    {% endfor %}
  {% endwith %}
{% endrendercontent %}
