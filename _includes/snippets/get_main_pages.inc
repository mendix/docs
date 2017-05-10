<ul>
  <li><a class="overview-link" href="{{ include.dir }}" title="{{ include.category }}">{{ include.category }}</a></li>
{% for catpage in site.pages %}
  {% if include.dir == catpage.dir %}
    {% if catpage.category %}{% else %}
      {% if catpage.parent %}{% else %}
        {% unless catpage.url == include.dir %}
  <li><a href="{{ catpage.url | remove: '.html' }}" title="{{ catpage.title }}">{{ catpage.title }}</a></li>
        {% endunless %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
