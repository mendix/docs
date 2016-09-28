<ul>
{% for catpage in site.pages %}
  {% if catpage.category == include.category %}
    {% if include.dir == catpage.dir %}
      <li><a href="{{ catpage.url | remove: '.html' }}">{{ catpage.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
