{% strip %}
  {% if include.dir %}
    {% assign current_dir = include.dir %}
  {% else %}
    {% assign current_dir = page.dir %}
  {% endif %}
  {% assign loop = 1 %}
  {% assign collection = include.collection %}
  {% assign next_level = include.level | plus: 1 %}
  {% for col_page in collection %}
    {% assign name = col_page | append: ".md" | downcase %}
    {% for page in site.pages %}
      {% assign pagename = page.name | downcase %}
      {% if current_dir == page.dir %}
        {% if name == pagename %}
          {% unless loop == 1 %},{% endunless %}
          {% assign loop = loop | plus: 1 %}
          {
              "title": "{{ page.title }}",
              "id": "{{ page.title | slugify }}",
              "url": "{{ page.url | remove: '.html' }}"{% if page.subpages %},
              "pages": [
                {% include json-snippets/get_sub_pages.inc dir=current_dir collection=page.subpages level=next_level %}
              ]
              {% endif %}
          }
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
{% endstrip %}
