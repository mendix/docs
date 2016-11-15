((function($) {
  function searchClient (selector, debug) {
    this.domain = 'https://docs.mendix.com';
    if (location.hostname === 'localhost') {
      this.domain = 'http://localhost:4000';
    }
    if (!window.ALGOLIA_CONFIG) {
      console.warn('Mendix search: NO Algolia config for Mendix Documentation, no search possible');
      return;
    }
    if (!selector || !$(selector)) {
      console.warn('Mendix search: No selector, no search');
      return
    }
    if (typeof algoliasearch === 'undefined') {
      console.warn('Mendix search: No algolia search library, did you include it?');
      return
    }
    this.debug = typeof debug !== 'undefined' ? debug : false;
    this.client = null;
    this.index = null;
    this.autocomplete = null;
    this.config = window.ALGOLIA_CONFIG;
    this.suggestion = null;
    this.init($(selector));
  }

  searchClient.prototype.init = function ($el) {
    this.$el = $el;
    this.client = algoliasearch(this.config.appId, this.config.apiKey);
    this.index = this.client.initIndex(this.config.indexName);
    this.autocomplete = $el.autocomplete({
        hint: false,
        debug: this.debug
      }, [{
          source: $.fn.autocomplete.sources.hits(this.index, { hitsPerPage: 5 }),
          displayKey: 'title',
          templates: {
            empty: function (query, isEmpty) {
              return '<div class="no-results">No results found for this search.</div>';
            },
            suggestion: function(suggestion) {
              var el = '<div>';
              el += '<div class="aa-suggestion__title">' + suggestion._highlightResult.title.value + '</div>';
              el += '<div class="aa-suggestion__text">' + suggestion._highlightResult.text.value + '</div>';
              el += '<div class="aa-suggestion__space">' + suggestion.space + '</div>';
              el += '</div>';
              return el;
            },
            header: function (q, results) {
              if (q.isEmpty) {
                return null;
              }
              var el = '<div class="autocomplete-header">';
              el    += '<p>There are <span>' + results.nbHits + '</span> results. Press &lt;Enter&gt; for full search or click ';
              el    += '<a href="/search/?q=' + results.query + '">here</a></p>';
              el    += '</div>';
              return el;
            }
          }
        }]
    );

    this.autocomplete
      .on('autocomplete:selected', function(event, suggestion, dataset) {
        event.stopPropagation();
        event.preventDefault();
        window.location = this.domain + suggestion.url;
      }.bind(this))
      .on('autocomplete:cursorchanged', function (event, suggestion, dataset) {
        this.suggestion = suggestion;
      }.bind(this))
      .on('autocomplete:cursorremoved', function (event, suggestion, dataset) {
        this.suggestion = null;
      }.bind(this))
      .on('autocomplete:closed', function (event, suggestion, dataset) {
        this.$el.autocomplete('val', '');
        this.suggestion = null;
      }.bind(this))
      .on('keyup', function (event) {
        var val = this.$el.autocomplete('val');
        if (this.suggestion !== null || event.keyCode !== 13 || val === '') {
          return;
        }
        window.location = this.domain + '/search/?q=' + val;
      }.bind(this));
  }

  if ($('#mendix_search').length === 1) {
    new searchClient('#mendix_search', false);
  }
})(jQuery));
