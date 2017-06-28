((function($) {
  /* Zendesk suggestion list replacement */
  var $form = $("form.request-form");
  if (instantsearch && typeof window.ALGOLIA_CONFIG !== 'undefined' && $form.length === 1 && $form[0].id === "new_request") {
    console.log('[MENDIX SUPPORT REQUEST FORM] request form found');
    var $subject = $('input[type=text]#request_subject', $form);
    if ($subject.length === 1) {
      var initialValue = $subject.val();
      var $suggestion = $('.suggestion-list');
      if ($suggestion.length === 1) {
        var DEBOUNCE;
        console.log('[MENDIX SUPPORT REQUEST FORM] field found, implement search');
        $suggestion.removeAttr('data-hc-class');
        $suggestion.removeAttr('data-hc-suggestion-list');

        var $searchbox = $('<div class="searchbox"></div>');
        $suggestion.append($searchbox);
        $searchbox.append('<label>Suggested articles</label>');
        var $suggestion_box = $('<div class="searchbox-suggestions"></div>');
        $searchbox.append($suggestion_box);
        var $suggestion_list = $('<ul></ul>');
        $suggestion_box.append($suggestion_list);

        var search = instantsearch(ALGOLIA_CONFIG);

        search.addWidget(
          instantsearch.widgets.searchBox({
            container: $subject[0],
            autofocus: true,
            wrapInput: false,
            queryHook: function (query, search) {
              if (DEBOUNCE) {
                clearTimeout(DEBOUNCE);
              }
              DEBOUNCE = setTimeout(function () {
                if (query === '') {
                  $searchbox.hide();
                } else {
                  $searchbox.show();
                }
                search(query);
              }, 100);
            }
          })
        );

        search.addWidget(
          instantsearch.widgets.hits({
            container: $suggestion_list[0],
            hitsPerPage: 6,
            templates: {
              item: '<li><a target="_blank" href="{{{url}}}">{{{_highlightResult.title.value}}}</a> <span class="space">({{{space}}})</span><li>'
            },
            transformData : function(hit) {
              if (hit && hit.url) {
                hit.url = 'https://docs.mendix.com' + hit.url.replace('.html', '');
              }
              return hit;
            }
          })
        );

        search.start();
        $searchbox.hide();

        if (initialValue !== '') {
          search.helper.setQuery(initialValue).search();
        }
      }
    }
  }
})(jQuery));
