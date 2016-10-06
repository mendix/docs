<ul>
{% for catpage in site.pages %}
  {% if include.dir == catpage.dir %}
    {% if catpage.category == include.category %}
      <li><a href="{{ catpage.url | remove: '.html' }}">{{ catpage.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
