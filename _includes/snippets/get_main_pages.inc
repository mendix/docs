<ul>
{% for catpage in site.pages %}
  {% if include.dir == catpage.dir %}
    {% if catpage.category %}{% else %}
      {% if catpage.parent %}{% else %}
        {% if catpage.url == include.dir %}
          <li><a class="overview-link" href="{{ include.dir }}">Overview</a></li>
        {% else %}
          <li><a href="{{ catpage.url | remove: '.html' }}">{{ catpage.title }}</a></li>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
