{% strip %}
{% if include.dir %}
{% assign current_dir = include.dir %}
{% else %}
{% assign current_dir = page.dir %}
{% endif %}
{% assign loop = 1 %}
{% assign next_level = include.level | plus: 1 %}
[
{% for catpage in site.pages %}
{% assign dir = catpage.dir %}
{% if current_dir == dir %}
{% unless loop == 1 %},{% endunless %}
{% assign loop = loop | plus: 1 %}
{"title":"{{ catpage.title }}",
"category":"{{ catpage.category }}",
"id":"{{ catpage.name | remove: '.md' }}",
"url":"{{ catpage.url | remove: '.html' }}"{% if catpage.parent %},
"parent":"{{ catpage.parent }}"{% endif %}}
{% endif %}
{% endfor %}
]
{% endstrip %}
