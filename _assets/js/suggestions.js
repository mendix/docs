((function($) {
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
        $el.append('<p class="text-center lead">We have the following suggestions:</p><ul class="suggestions"></ul><p class="text-center lead">or use the search bar to find what you are looking for</p>');
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
