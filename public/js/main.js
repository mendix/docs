((function($) {
  /*
    @author: J.W. Lagendijk <jelte.lagendijk@mendix.com>

    This provides the basic functionality in the docs.mendix.com site.
    This will be replaced later

    Work-in-progress
  */
  $(function() {

    // Make sure external links are opened with _blank
    $(".content a").each(function () {
      var href = $(this).attr("href");
      if (href && href.indexOf('http') === 0) {
        $(this).attr("target","_blank");
      }
    });

    /*****************
      Overview blocks
    ******************/
    $(".overview-block-tile").on('click', function () {
      var $parent = $(this).parent();
      if ($parent.hasClass('open')) {
        $parent.removeClass('open');
      } else {
        $parent.closest('.overview').find('.overview-block').removeClass('open');
        $parent.addClass('open');
      }
    });

    $(".overview-block-close").on('click', function (e) {
      e.preventDefault();
      $(this).closest('.overview-block.open').removeClass('open');
    });

    /*****************
      Menu structure
    ******************/
    function normalizeId(id) {
      return id.replace(/[ '"\+\-&]+/g, "-").toLowerCase();
    }

    function addNormalLink(title, url) {
      return $([
        '<i class="link-icon link-icon-link"></i>',
        url === null ? '' : '<a href="' + url + '" data-page-title="' + title + '" title="' + title + '">',
        '<div class="category-title" ' + (url === null ? 'data-page-title="' + title + '"' : '') + '>' + title + '</div>',
        url === null ? '' : '</a>'
      ].join(''));
    }

    function addExpandLink(id, title, url) {
      return $([
        '<a class="expand-link" href="#' + id + '" data-toggle="collapse" aria-expanded="false" aria-controls="' + id + '">',
        '<i class="link-icon link-icon-menu"></i>',
        '</a>',
        url === null ? '' : '<a title="' + title + '" data-page-title="' + title + '" href="' + url + '">',
        '<div class="category-title" ' + (url === null ? 'data-page-title="' + title + '"' : '') + '>' + title + '</div>',
        url === null ? '' : '</a>',
      ].join(''));
    }

    function addPages(pages, data) {
      var $list = $('<ul />');

      pages.forEach(function (page) {
        var $item = $('<li />');
        var subpages = data.pages.filter(function (rootpage) { return rootpage.parent && rootpage.parent.toLowerCase() === page.id.toLowerCase(); });
        if (subpages && subpages.length > 0) {
          var pageId = 'cat-' + normalizeId(page.id),
              $collapse = $('<div class="collapse" id="'+ pageId + '" />');

          $item.append(addExpandLink(pageId, page.title, page.url));
          $collapse.append(addPages(subpages, data));
          $item.append($collapse);
        } else {
          $item.append(addNormalLink(page.title, page.url));
        }
        $list.append($item);
      });

      return $list;
    }

    function createCategory(cat, data) {
      var $cat = $('<div class="category" />'),
          id = normalizeId(cat),
          getPages = data.pages.filter(function (page) { return page.category.toLowerCase() === cat.toLowerCase(); }),
          catPage = data.pages.filter(function (page) { return page.title.toLowerCase() === cat.toLowerCase(); });

      var catUrl = catPage && catPage.length === 1 ? catPage[0].url : null;

      if (getPages.length === 0 && catUrl) {
        $cat.append(addNormalLink(cat, catUrl));
      } else if (getPages.length > 0) {
        var catId = 'cat-' + id,
            $collapse = $('<div class="collapse" id="'+ catId + '" />');

        $cat.append(addExpandLink(catId, cat, catPage.length === 1 ? catPage[0].url : null));
        $collapse.append(addPages(getPages, data));
        $cat.append($collapse);
      } else {
        console.warn(cat + ' has no page and no subpages, skipping');
      }

      return $cat;
    }

    function menu(element, callback) {
      var $menu = $(element);
      $.get($menu.data("source"), function( data ) {
        if (data.categories && data.pages) {
          data.categories.forEach(function (cat) {
            $menu.append(createCategory(cat, data));
          });
          callback($menu);
        }
      });
    }

    function hasBreadCrumbLink(title) {
      return $('ol.breadcrumb').find('li').filter(function (){ return $(this).text().trim() === title.trim(); }).length > 0;
    }

    function walkmenu(element) {
      $(element).find('a').each(function () {
        var $menulink = $(this);
        if ($menulink.attr('href') === window.location.pathname) {
          var $parents = $($menulink.parents('.collapse').get().reverse()),
              $breadcrumb = $('ol.breadcrumb'),
              href = $menulink.attr('href'),
              $parent = $menulink.parent();

          $menulink.addClass('active');

          $parents.each(function () {
            var $collapse = $(this),
                $parentlink = $collapse.parent().find('> a.expand-link'),
                $title = $collapse.parent().find('> [data-page-title]');

            $collapse.addClass('in');
            $parentlink.attr('aria-expanded', 'true');

            if ($title && $title.length) {
              $title.addClass('sub-active');
              if (!hasBreadCrumbLink($title.text())) {
                if ($title.attr('href')) {
                  $breadcrumb.append('<li><a href="' + $title.attr('href') + '" title="' + $title.text() + '">' + $title.text() + '</a></li>');
                } else {
                  $breadcrumb.append('<li>' + $title.text() + '</li>');
                }
              }
            }
          });

          if (!hasBreadCrumbLink($menulink.text())) {
            $breadcrumb.append('<li><a href="' + href + '" title="' + $menulink.text() + '">' + $menulink.text() + '</a></li>');
          }

          if ($parent.find('> .expand-link').length === 1) {
            $parent.find('> .expand-link').attr('aria-expanded', 'true');
            $parent.find('> .collapse').addClass('in');
          }
        }
      });
    }

    $('.menu').each(function () {
      if ($(this).data("source")) {
        menu(this, walkmenu);
      }
    });

    /*****************
      Back to top
    ******************/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*****************
      Clear buttons
    ******************/
    $('.has-clear input[type="text"]').on('input propertychange', function() {
        var $this = $(this);
        var visible = Boolean($this.val());
        $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
    }).trigger('propertychange');

    $('.form-control-clear').click(function() {
        $(this).parent().find('input[type="text"]').val('')
          .trigger('propertychange').focus();
    });

    /*****************
      Image lightbox
    ******************/
    $('.mxdefault').find('img').each(function () {
      var $img = $(this),
          src = $img.attr('src');
      if (src && src.indexOf('attachments') !== -1) {
        $img.wrap('<a href="' + src + '" rel="lightbox[mxdefault]"></a>');
      }
    })
  });
})(jQuery));
