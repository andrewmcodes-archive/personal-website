---
layout: default
permalink: /success/
---

{% rendercontent "shared/section" %}
  {% with title %}
    Success!
  {% endwith %}

  {% with subtitle %}
    The form has been submitted and I will get back to you as soon as I can!
  {% endwith %}

  {% with content %}
    <div class="flex justify-center my-8 md:my-12">
      {% render "shared/button", text: "Home" url: "/", size: "xl" %}
      <div class="inline-flex ml-3">
        {% render "shared/button", text: "Go Back", variant: "white", url: "/contact", size: "xl" %}
      </div>
    </div>
  {% endwith %}
{% endrendercontent %}
