/* global instantsearch */
function getTemplate(templateName) {
  return document.getElementById(templateName + '-template').innerHTML;
}

var search = instantsearch(ALGOLIA_CONFIG);

/*
  SEARCHBOX
*/
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#mendix_search'
  })
);

/*
  STATS
*/
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats',
    templates: {
      body: getTemplate('stats')
    },
    transformData: function(result) {
      result.emptyQuery = result.query === "";
      result.nonEmptyQuery = !result.emptyQuery;
      return result;
    }
  })
);

/*
  FILTER (SPACES)
*/
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#space',
    attributeName: 'space',
    operator: 'or',
    sortBy: ['isRefined', 'count:desc', 'name:asc'],
    limit: 10,
    templates: {
      header: '<h5>Main categories</h5>'
    }
  })
);

/*
  RESULTS
*/
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      empty: getTemplate('no-results'),
      item: getTemplate('hit')
    },
    transformData: function(hit) {
      //console.log(hit);
      if (hit && hit.url)
        hit.url = hit.url.replace('.html', '');
      return hit;
    }
  })
);

/*
  PAGINATION
*/
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
