<ul>
{% for catpage in site.pages %}
  {% if include.dir == catpage.dir %}
    {% if catpage.parent == include.page %}
      <li><a href="{{ catpage.url | remove: '.html' }}" title="{{ catpage.title }}">{{ catpage.title }}</a></li>
    {% else %}
      {% assign name = catpage.name | remove: '.md' %}
      {% if name == include.page %}
        <li><a class="overview-link" href="{{ catpage.url | remove: '.html' }}" title="{{ catpage.title }}">{{ catpage.title }}</a></li>
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
