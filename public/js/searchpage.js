/* global instantsearch */

var search = instantsearch(ALGOLIA_CONFIG);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#mendix_search'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats',
    templates: {
      body: [
        '<div class="stats">',
        '{{#nonEmptyQuery}}Found {{{nbHits}}} results for search: &quot;{{{query}}}&quot;{{/nonEmptyQuery}}',
        '{{#emptyQuery}}There are {{{nbHits}}} pages, specify a search{{/emptyQuery}}',
        ' <div class="stats_time">{{{processingTimeMS}}} ms</div>',
        '</div>'
      ].join('')
    },
    transformData: function(result) {
      result.emptyQuery = result.query === "";
      result.nonEmptyQuery = !result.emptyQuery;
      return result;
    }
  })
);

var hitTemplate =
  '<div class="search_hit hit media">' +
    '<div class="media-body">' +
      '<h4 class="media-heading"><a href="{{{url}}}">{{{_highlightResult.title.value}}}</a></h4>' +
      '<p class="text">{{{_highlightResult.text.value}}}</p>' +
    '</div>' +
  '</div>';

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    },
    transformData: function(hit) {
      if (hit && hit.url)
        hit.url = hit.url.replace('.html', '');
      return hit;
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      root: 'pagination',
      active: 'active'
    }
  })
);


search.start();
