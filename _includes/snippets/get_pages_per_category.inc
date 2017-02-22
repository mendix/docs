<ul>
{% if include.overview %}
      <li><a href="{{ include.dir }}" class="overview-link" title="{{ include.category }}">{{ include.category }}</a></li>
{% endif %}
{% for catpage in site.pages %}
  {% if include.dir == catpage.dir %}
    {% if catpage.category == include.category %}
      <li><a href="{{ catpage.url | remove: '.html' }}" title="{{ catpage.title }}">{{ catpage.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
