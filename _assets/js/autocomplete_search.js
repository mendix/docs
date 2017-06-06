((function($) {
  function searchClient (selector, opts) {
    if (!opts) {
      opts = {
        debug: false,   // keep open after blur
        target: 'self'  // target = self or new
      };
    }
    this.domain = 'https://docs.mendix.com';
    if (location.hostname === 'localhost') {
      this.domain = 'http://localhost:4000';
    } else if (location.hostname === 'documentation-accp.cfapps.io') {
      this.domain = 'https://documentation-accp.cfapps.io';
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
    this.opts = opts;
    this.client = null;
    this.index = null;
    this.autocomplete = null;
    this.config = window.ALGOLIA_CONFIG;
    this.suggestion = null;
    this.init($(selector));
  };

  searchClient.prototype.init = function ($el) {
    this.$el = $el;
    this.client = algoliasearch(this.config.appId, this.config.apiKey);
    this.index = this.client.initIndex(this.config.indexName);
    this.autocomplete = $el.autocomplete({
        hint: false,
        debug: this.opts.debug
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
              el += '<div class="aa-suggestion__space">' + (typeof suggestion.space !== 'undefined' ? suggestion.space : '&nbsp;') + '</div>';
              el += '</div>';
              return el;
            },
            header: function (q, results) {
              if (q.isEmpty) {
                return null;
              }
              var el = '<div class="autocomplete-header">';
              el    += '<p>There are <span>' + results.nbHits + '</span> results. Press &lt;Enter&gt; for full search or click ';
              el    += '<a href="' + this.domain + '/search/?q=' + results.query + '">here</a></p>';
              el    += '</div>';
              return el;
            }.bind(this)
          }
        }]
    );

    $el.trigger('focus');

    this.autocomplete
      .on('autocomplete:selected', function(event, suggestion, dataset) {
        event.stopPropagation();
        event.preventDefault();
        var link = this.domain + suggestion.url.replace('.html', '');
        if (this.opts.target === 'new') {
          window.open(link);
        } else {
          window.location = link;
        }
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
  };

  window.__searchClient = searchClient;

  /* Zendesk autocomplete */
  if ($('#mendix_search').length === 1) {
    new searchClient('#mendix_search', {
      debug: false,
      target: 'self'
    });
  }

  /* 404 pages */
  if ($('.not-found-suggestion').length !== 0) {
    var $el = $('.not-found-suggestion'),
        splitted = location.pathname.split('/'),
        last = splitted.slice(-1)[0] === "" ? -2 : -1,
        path = decodeURIComponent(splitted.slice(last)[0]).replace(/[\ \/\-\+]/g, ' '),
        client = algoliasearch(ALGOLIA_CONFIG.appId, ALGOLIA_CONFIG.apiKey),
        index = client.initIndex(ALGOLIA_CONFIG.indexName);

    var metadata = {
      path: location.href
    };
    window.Intercom && __trackIntercomEvent('page-not-found', metadata);

    index.search(path, function searchDone(err, content) {
      if (err) {
        console.error(err);
        return;
      }
      if (content.hits && content.hits.length > 0) {
        var suggestions = content.hits.slice(0, 5),
            searchUrl = (location.hostname === 'localhost' ? '/search/?' : 'https://docs.mendix.com/search/?') +  content.params;

        $el.empty();
        $el.append('<p class="text-center lead">We have the following suggestions:</p><ul class="suggestions"></ul><p class="text-center lead">Or use the <a href="' + searchUrl + '">full search</a>.</p>');
        for (var i = 0; i < suggestions.length; i++) {
          var suggestion = suggestions[i],
              url = (location.hostname === 'localhost' ? '' : 'https://docs.mendix.com') +  suggestion.url.replace('.html', '');

          var $li = $('<li><a href="' + url + '">' + suggestion.space + ' : ' + suggestion.title + '</a></li>');
          $('.suggestions', $el).append($li);
        }
        $el.removeClass('hidden');
      }
    });
  }

})(jQuery));
