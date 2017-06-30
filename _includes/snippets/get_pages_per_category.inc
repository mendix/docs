<ul>
{% if include.overview %}
      <li><a href="{{ include.dir }}" class="overview-link" title="{{ include.category }}">{{ include.category }}</a></li>
{% elsif include.mainpage %}
      <li><a href="{{ include.dir }}{{ include.mainpage }}" class="overview-link" title="{{ include.category }}">{{ include.category }}</a></li>
{% endif %}
{% assign indexName = include.dir | append: include.category %}
{% assign pages = site.data['category_index'][indexName] %}
{% for catpage in pages %}
      <li><a href="{{ catpage.url | remove: '.html' }}" title="{{ catpage.title }}">{{ catpage.title }}</a></li>
{% endfor %}
</ul>
