((function($) {
  /*
    @author: J.W. Lagendijk <jelte.lagendijk@mendix.com>

    This provides the basic functionality in the docs.mendix.com site. Work-in-progress
  */
  $(function() {

    var $win = $(window);
    var $body = $(document.body);

    // Make sure external links are opened with _blank
    $(".mx__page__content a").each(function () {
      var href = $(this).attr("href");
      if (href && href.indexOf('http') === 0) {
        $(this).attr("target","_blank");
      }
    });

    // Make tooltips visible
    $('[data-toggle="tooltip"]').tooltip({
      html: true
    });

    /*****************
      Menu structure
    ******************/
    function normalizeId(id) {
      return id.replace(/[ '"\+\-&]+/g, "-").toLowerCase();
    }

    function getRandom(max) {
      max = Math.floor(max);
      return Math.floor(Math.random() * max);
    }

    function sortPages(arr, getModifier, numFunc) {
      var num = numFunc || function (n) { return n; };
      return arr.sort(function (p1, p2) {
        return num(getModifier(p1)) - num(getModifier(p2));
      });
    }

    function getPageArrType(arr) {
      var type = 'string';
      arr.forEach(function (s) {
        if (s.i && (s.i.indexOf('.') !== -1 || !isNaN(parseInt(s.i)) && s.i.length === 1)) {
          type = 'version';
        } else if (s.i && s.i.indexOf('-') !== -1 && s.i.split('-').length === 3) {
          type = 'date'
        }
      });
      return type;
    }

    function sortOnVersion(arr) {
      var type = getPageArrType(arr);
      if (type === 'version') {
        return sortPages(
          arr,
          function (p) { return p.i.replace("modeler-","").split(".").map(function (n) { return parseInt(n, 10) }); },
          function (n) { return (n[0] ? n[0] * 10000 : 0) + (n[1] ? n[1] * 100 : 0) + (n[2] || 0); }
        ).reverse();
      }
      if (type === 'date') {
        return sortPages(
          arr,
          function (p) { return new Date(p.i.trim()) }
        ).reverse();
      }
      return arr.sort();
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
        var subpages = data.pages.filter(function (rootpage) {
          return rootpage.p && rootpage.p.toLowerCase() === page.i.toLowerCase() && rootpage.d.indexOf(page.d) !== -1;
        });
        var title = typeof page.mt !== 'undefined' ? page.mt : page.t;

        if (subpages && subpages.length > 0) {
          var pageId = 'page-' + getRandom(100000) + '-' + normalizeId(page.i),
              $collapse = $('<div class="collapse" id="'+ pageId + '" />');

          if (page && page.u.indexOf("/releasenotes/") === 0) {
            subpages = sortOnVersion(subpages);
          }

          $item.append(addExpandLink(pageId, title, page.u));
          $collapse.append(addPages(subpages, data));
          $item.append($collapse);
        } else {
          $item.append(addNormalLink(title, page.u));
        }
        $list.append($item);
      });

      return $list;
    }

    function createCategory(spaceID, cat, data) {
      var id = normalizeId(cat),
          catID = normalizeId(spaceID) + '-category-' + id;
          $cat = $('<div class="category" id="' + catID + '" />'),
          getPages = data.pages.filter(function (page) { return page.c && page.c.toLowerCase() === cat.toLowerCase(); }),
          catPage = data.pages.filter(function (page) { return page.t.toLowerCase() === cat.toLowerCase() && typeof page.p === 'undefined'; });

      if (catPage.length > 1) {
        console.log('Problem with ' + spaceID + ', multiple category pages found for: ' + catID, catPage);
      }
      var catUrl = catPage && catPage.length === 1 ? catPage[0].u : null;

      if (catUrl && catUrl.indexOf("/releasenotes/") === 0){
        getPages = sortOnVersion(getPages);
      }

      if (getPages.length === 0 && catUrl) {
        $cat.append(addNormalLink(cat, catUrl));
      } else if (getPages.length > 0) {
        var catId = spaceID + '-cat-' + id,
            $collapse = $('<div class="collapse" id="'+ catId + '" />');

        $cat.append(addExpandLink(catId, cat, catPage.length === 1 ? catPage[0].u : null));
        $collapse.append(addPages(getPages, data));
        $cat.append($collapse);
      } else {
        console.warn(cat + ' has no page and no subpages, skipping');
      }

      return $cat;
    }

    function menu(element, callback) {
      var $menu = $(element),
          $source = $menu.data('source');
      $.get($source, function( data ) {
        if (data.categories && data.pages) {
          var mainPage = data.pages.filter(function (page) { return page.m });
          var space = $source.replace('/json/', '').replace('.json', '');
          if (mainPage.length === 1) {
            var main = mainPage[0];
            var mainID = 'space-' + normalizeId(main.t);
            var $space = $('<div class="space" />');
            var $collapse = $('<div class="collapse" id="' + mainID + '" />');
            var title = typeof main.mt !== 'undefined' ? main.mt : main.t;
            $menu.append($space);
            $space.append(addExpandLink(mainID, title, main.u));
            $space.append($collapse);
            data.categories.forEach(function (cat) {
              $collapse.append(createCategory(space, cat, data));
            });
            callback($menu);
          } else {
            console.warn('Cannot find mainpage for ' + $source);
          }
        }
      });
    }

    function hasBreadCrumbLink(title) {
      return $('ul.mx__breadcrumb').find('li').filter(function (){ return $(this).text().trim() === title.trim(); }).length > 0;
    }

    function shortenBreadCrumb() {
      var $list = $('ul.mx__breadcrumb').find('li');
      if ($list.length <= 3) {
        return false;
      }
      var $el = $($list[1]);
      $el.html('<span>&hellip;</span>');
      return true;
    }

    function getOverflownHeight(el) {
      var errorMargin = 10;
      var cW = el.clientWidth;
      var sW = el.scrollWidth;
      var cH = el.clientHeight;
      var sH = el.scrollHeight;
      return ((cW < sW) || (cH < sH && Math.abs(cH - sH) > errorMargin));
    }

    function adjustBreadCrumb(s) {
      var x = typeof s === 'undefined' ? 10 : s - 1;
      if (x < 0) {
        return;
      }
      var errorMargin = 5; // Need this to make sure it does not keep on going
      var $el = $('ul.mx__breadcrumb');
      var el = $el[0];
      var fontSize = parseInt($el.css("font-size").replace('px', ''), 10);

      if (getOverflownHeight(el) && x > 0) {
        fontSize--;
        $el.css('font-size', fontSize + 'px');
        var shorten = shortenBreadCrumb();
        if (shorten) {
          setTimeout(function () {
            if (getOverflownHeight(el)) {
              adjustBreadCrumb(x--);
            }
          }, 50);
        }
      }
    }

    function walkmenu(element) {
      var found = false;
      $(element).find('a').each(function () {
        var $menulink = $(this);
        if ($menulink.attr('href') === window.location.pathname) {
          var $parents = $($menulink.parents('.collapse').get().reverse()),
              $breadcrumb = $('ul.mx__breadcrumb'),
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
              found = true;
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
      if (found) {
        adjustBreadCrumb();
      }
      $('.sidebar-menu .seperator').show();
      $('.sidebar-menu--loading').removeClass('sidebar-menu--loading');
    }

    $('.menu').each(function () {
      if ($(this).data("source")) {
        menu(this, walkmenu);
      }
    });

    /*****************
      Back to top
    ******************/
    $('body').on('click', '.mx__toc__title', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

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
    $('.mx__page__content').find('img').each(function () {
      var $img = $(this),
          src = $img.attr('src'),
          parentTag = $img.parent() ? $img.parent().prop('tagName') : null;

      if (src && src.indexOf('attachments') !== -1 && parentTag !== 'A') {
        $img.wrap('<a href="' + src + '" rel="lightbox[mxdefault]"></a>');
      }
    });

    /*****************
      Table expand
    ******************/
    function doModal(formContent) {
        html =  '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
        html += '<div class="modal-dialog modal-xl modal-lg">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<a class="close" data-dismiss="modal">×</a>';
        html += '</div>';
        html += '<div class="modal-body">';
        html += formContent.html();
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<span class="btn btn-primary" data-dismiss="modal">Close</span>';
        html += '</div>';  // content
        html += '</div>';  // dialog
        html += '</div>';  // footer
        html += '</div>';  // modalWindow
        $('body').append(html);
        $("#dynamicModal").modal();
        $("#dynamicModal").modal('show');

        $('#dynamicModal').on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
    }

    $('.mx__page__content').find('table').each(function () {
      var $table = $(this);
      var $firstTableEl = $table.find('thead').first().find('th').first();

      if ($firstTableEl) {
        $firstTableEl.addClass('has-expand');
        var $expand = $('<div class="expand-table"><i class="glyphicon glyphicon-fullscreen"></i></div>');
        $firstTableEl.append($expand);
        $expand.on('click', function () {
          var $tableCopy = $('<table class="table table-bordered" />').append($table.clone(true).html());
          doModal($('<div />').append($tableCopy));
        });
      }
    });


    /*****************
      Table of contents
    ******************/
    var $toc = $('#toc');
    if ($toc.length === 1) {
      var maxLevel = $('#toc') ? $('#toc').data('level') || null : null;
      $('#toc').toc({
        noBackToTopLinks: true,
        title: '<span class="mx__toc__title">Table of contents</span>',
        maxLevel: maxLevel,
        showSpeed: '1',
        listType: 'ul',
        headers: [
          '.mx__page__content h1',
          '.mx__page__content h2',
          '.mx__page__content h3',
          '.mx__page__content h4',
          '.mx__page__content h5',
          '.mx__page__content h6'
        ].join(','),
        classes: {
            list: 'nav nav-stacked',
            item: 'toc_list_item'
        }
      });

      var $header = $('.mx__page__header');
      var $toc_title = $('.mx__toc__title');
      var initialMarginHeight = $header.height() + 8;

      $toc.children().first().css('margin-top', initialMarginHeight);
      $toc.css('position', 'fixed');

      $body.scrollspy({
        target: '#toc',
        offset: 40
      });

      $win.on('load', function () {
        $body.scrollspy('refresh');
      });

      var scrollToc = function () {
        $toc_title.css('margin-top', $win.scrollTop() > initialMarginHeight ? 0 : initialMarginHeight - $win.scrollTop());
      }

      setTimeout(function () {
        var $el = $toc;
        $el.show();
        scrollToc();
        $el.affix({
          offset: {
            top: function () {
              var c = $el.offset().top;
              var d = parseInt($el.children(0).css('margin-top'), 10);
              var e = $el.find('.nav').first().height();
              var newTop = c - d - e;
              return this.top = newTop > 0 ? newTop : 0;
            },
            bottom: function () {
              var height = $('.footer').outerHeight(true);
              height += $('.mx-developer__footer').outerHeight(true);
              return this.bottom = height + 50;
            }
          }
        });
      }, 100);
      $win.on('scroll', scrollToc);
    }

    /*****************
      Print PDF (DISABLED)
    ******************/
    function msieversion() {
      var ua = window.navigator.userAgent,
          msie = ua.indexOf("MSIE ");

      if (msie > 0) { // If Internet Explorer, return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
      } else { // If another browser, return 0
        return 0;
      }
    }

    var $print = $('.pdf-print');
    if ($print.length) {
      var $target = $('.mx__page');
      var fileName = $target.data('file-id');

      if (fileName) {
        fileName += '.pdf';
      } else {
        fileName = 'documentation.pdf';
      }

      var $el = $target.get(0);

      $body.on('click', '.pdf-print', function(e) {
        e.preventDefault();
        $target.addClass('mx__page--print');
        html2canvas($el, {
          background: '#FFF',
          height: $el.scrollHeight + 1000,
          onrendered: function(canvas) {

            canvas.getContext('2d')['imageSmoothingEnabled'] = false;       /* standard */
            canvas.getContext('2d')['mozImageSmoothingEnabled'] = false;    /* Firefox */
            canvas.getContext('2d')['oImageSmoothingEnabled'] = false;      /* Opera */
            canvas.getContext('2d')['webkitImageSmoothingEnabled'] = false; /* Safari */
            canvas.getContext('2d')['msImageSmoothingEnabled'] = false;     /* IE */

            doc = new jsPDF("p", "pt", "letter", true);

            var pageWidth = 612;
            var pageHeight = 792;
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;

            var imgPageHeight = Math.round(canvasWidth * pageHeight / pageWidth);
            var heightLeft = canvasHeight;

            var pageCanvas,
                context,
                pageImgData,
                pageCount = 0;

            while (heightLeft >= 0) {

              if(pageCount !== 0) {
                doc.addPage();
              }

              pageCanvas = document.createElement('canvas');
              pageCanvas.width = canvasWidth;
              pageCanvas.height = imgPageHeight;
              context = pageCanvas.getContext('2d');

              context['imageSmoothingEnabled'] = false;       /* standard */
              context['mozImageSmoothingEnabled'] = false;    /* Firefox */
              context['oImageSmoothingEnabled'] = false;      /* Opera */
              context['webkitImageSmoothingEnabled'] = false; /* Safari */
              context['msImageSmoothingEnabled'] = false;     /* IE */

              context.fillStyle = '#fff';  /// set white fill style
              context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
              context.drawImage(canvas, 0, canvas.height-heightLeft, canvas.width,  imgPageHeight, 0, 0, pageCanvas.width, pageCanvas.height);

              pageImgData = pageCanvas.toDataURL('image/png');
              doc.addImage(pageImgData, 'PNG', 0, 0, pageWidth, pageHeight, pageCount, 'slow');

              heightLeft -= imgPageHeight;
              pageCount += 1;
            }

            if (msieversion() > 8 && msieversion() < 11) {
              doc.save();
            } else {
              doc.output("save", fileName);
            }
            $target.removeClass('mx__page--print');
          }
        });
      });

    }

    /*****************
      Code highlighting
    ******************/
    $('pre').each(function () {
      $(this).addClass('line-numbers');
    });

    /*****************
      Intercom
    ******************/
    function loadIntercom() {
      if (!window.intercomSettings || !window.intercomSettings.user_id) {
        console.warn('No openID found, so the user might not be logged in. Skipping Intercom');
        window.Intercom('shutdown');
      } else {
        window.Intercom('boot', window.intercomSettings);
        setTimeout(function () {
          var loc = window.location.toString();
          window.Intercom('update', {
            'url': loc,
            'update': 1
          });
        }.bind(this), 2000);
      }
    }

    if (window.Intercom && window.__IntercomAppId && window.intercomSettings) {
      $('#back-to-top').addClass('with-intercom');
      $.getJSON('https://home.mendix.com/mxid/appbar2?b=' + Math.random() + '&callback=?', function (rawData) {
          if (!rawData.length) {
              console && console.warn("Appbar request returns no content.");
              loadIntercom();
              return;
          }
          var data = rawData[0];
          if (!data) {
              console && console.warn("Appbar request returns empty content.");
              loadIntercom();
              return;
          }

          if (data.loggedIn) {
            if (data.userName) window.intercomSettings.email = data.userName;
            if (data.openId) window.intercomSettings.user_id = data.openId;
            if (data.displayName) window.intercomSettings.name = data.displayName;
          }

          loadIntercom();

        }).fail(function () {
          console.warn('Failed to get MXID');
          loadIntercom();
        });
    }
  });
})(jQuery));
