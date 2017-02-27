{% strip %}
{% assign loop = 1 %}
[
{% for catpage in site.data['dir_index'][include.dir] %}
{% unless loop == 1 %},{% endunless %}
{% assign loop = loop | plus: 1 %}
{"title":"{{ catpage.title }}",
"category":"{{ catpage.category }}",
"id":"{{ catpage.name | remove: '.md' }}",
"url":"{{ catpage.url | remove: '.html' }}"{% if catpage.parent %},
"parent":"{{ catpage.parent }}"{% endif %}}
{% endfor %}
]
{% endstrip %}
