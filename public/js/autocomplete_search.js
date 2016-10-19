((function($) {
  /* search
    TODO: Will be replaced by autocomplete function
  */
  $(function() {
    $('#mendix_search').on('keypress', function (e) {
      if (e.which === 13) {
        var val = $(this).val();
        if (val !== '') {
          window.location.href = '/search/?q=' + val;
        }
      }
    });
  });
})(jQuery));
