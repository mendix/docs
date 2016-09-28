{% strip %}
  {% if include.dir %}
    {% assign current_dir = include.dir %}
  {% else %}
    {% assign current_dir = page.dir %}
  {% endif %}
  {% assign loop = 1 %}
  {% assign next_level = include.level | plus: 1 %}
    {
      "id": "{{ include.category | slugify }}",
      "title": "{{ include.category }}",
      {% if include.root %}
      "url": "{{ current_dir }}{{ include.root }}",
      {% endif %}
      "pages": [
      {% for catpage in site.pages %}
        {% assign dir = catpage.dir %}
        {% assign cat = catpage.category %}
        {% if cat == include.category %}
          {% if current_dir == dir %}
            {% unless loop == 1 %},{% endunless %}
            {% assign loop = loop | plus: 1 %}
            {
                "title": "{{ catpage.title }}",
                "id": "{{ catpage.title | slugify }}",
                "url": "{{ catpage.url | remove: '.html' }}"{% if catpage.subpages %},
                "pages": [
                  {% include json-snippets/get_sub_pages.inc dir=current_dir collection=catpage.subpages level=next_level %}
                ]{% endif %}
            }
          {% endif %}
        {% endif %}

      {% endfor %}
      ]
  }
{% endstrip %}
