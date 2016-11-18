{% strip %}
{% if include.space %}
{% assign loop = 1 %}
{% assign next_level = include.level | plus: 1 %}
[
{% for catpage in site.pages %}
{% if catpage.space == include.space %}
{% unless loop == 1 %},{% endunless %}
{% assign loop = loop | plus: 1 %}
{% assign indexID = catpage.title | replace: ' ','+' %}
{"title":"{{ catpage.title }}",
"category":"{{ catpage.category }}",
"id":"{{ catpage.name | remove: '.md' | replace:'index',indexID }}",
"url":"{{ catpage.url | remove: '.html' | remove: '/index' }}"{% if catpage.parent %},
"parent":"{{ catpage.parent }}"{% endif %}}
{% endif %}
{% endfor %}
]
{% endif %}
{% endstrip %}
