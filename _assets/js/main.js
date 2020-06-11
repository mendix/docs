((function($) {
  /*
    @author: J.W. Lagendijk <jelte.lagendijk@mendix.com>

    This provides the basic functionality in the docs.mendix.com site. Work-in-progress
  */

  function getAllUrlParams(url) {

    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};

    if (queryString) {

      queryString = queryString.split('#')[0];
      var arr = queryString.split('&');

      for (var i = 0; i < arr.length; i++) {
        var a = arr[i].split('=');
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

        if (paramName.match(/\[(\d+)?\]$/)) {

          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
          if (paramName.match(/\[\d+\]$/)) {
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            obj[key].push(paramValue);
          }
        } else {
          if (!obj[paramName]) {
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            obj[paramName].push(paramValue);
          }
        }
      }
    }

    return obj;
  }

  $(function() {

    var $win = $(window);
    var $body = $(document.body);
    window.__mxDocsInIframe = false;

    // Set class for iframes
    try {
      const show = getAllUrlParams().show;
      const noLinks = getAllUrlParams().nolinks;
      if (typeof show !== "undefined" && show === "iframe") {
        window.__mxDocsInIframe = true;
        $body.addClass("iframe");
        $body.find('.mx__main').removeClass('col-md-9 col-md-push-3');
        $body.find('.mx__sidebar').remove();
        $body.find('.topbar').remove();
      }
      if (typeof noLinks !== "undefined" && noLinks === "1") {
        $body.addClass("nolinks");
      }
    } catch (error) {
      console.warn(error);
    }

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
      Image containers
    ******************/
    $('.image-container').each(function () {
      var $this = $(this);
      var widthData = $this.data('max-width');
      var alignData = $this.data('align');
      var $images = $('img', $this);
      if (!widthData || !$images) {
        return;
      }
      if (alignData) {
        $this.addClass('text-' + alignData);
      }
      var width = 'number' === typeof widthData ? widthData + 'px' : widthData;
      $images.each(function () {
        var $img = $(this);
        $img.css('width', '100%');
        $img.css('max-width', width);
        $img.show();
      });
    });

    /*****************
      Menu structure
    ******************/
    function normalizeId(id) {
      return id.replace(/[ '"\+\-&\.]+/g, "-").replace(/[\(\)]/g, '').toLowerCase();
    }

    function getRandom(max) {
      max = Math.floor(max);
      return Math.floor(Math.random() * max);
    }

    function hasMenuOrders(arr) {
      return arr.length > 0 && arr.filter(function (p) { return typeof p.mo !== 'undefined'; }).length > 0;
    }

    function sortOnMenuOrders(arr) {
      if (hasMenuOrders(arr)) {
        var fixed = arr.map(function (p) {
          if (typeof p.mo === 'undefined') {
            p.mo = 100000000;
          }
          return p;
        });
        return fixed.sort(function (p1, p2) {
          return p1.mo - p2.mo;
        });
      }
      return arr;
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

    function addNormalLink(title, url, draft) {
      var cleanUrl = url === null ? null : url.replace(/[\(\)]/g, '');
      return $([
        '<i class="link-icon link-icon-link"></i>',
        cleanUrl === null ? '' : '<a href="' + cleanUrl + '" data-page-title="' + title + '" title="' + title + '">',
        '<div class="category-title" ' + (cleanUrl === null ? 'data-page-title="' + title + '"' : '') + '>' + title +
        (draft ? '<span class="category-title__badge badge">draft</span>' : '') +
        '</div>',
        cleanUrl === null ? '' : '</a>'
      ].join(''));
    }

    function addExpandLink(id, title, url, draft) {
      var cleanUrl = url === null ? null : url.replace(/[\(\)]/g, '');
      return $([
        '<a class="expand-link" href="#' + id + '" data-toggle="collapse" aria-expanded="false" aria-controls="' + id + '">',
        '<i class="link-icon link-icon-menu"></i>',
        '</a>',
        cleanUrl === null ? '' : '<a title="' + title + '" data-page-title="' + title + '" href="' + cleanUrl + '">',
        '<div class="category-title" ' + (cleanUrl === null ? 'data-page-title="' + title + '"' : '') + '>' + title +
        (draft ? '<span class="category-title__badge badge">draft</span>' : '') +
        '</div>',
        cleanUrl === null ? '' : '</a>',
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
        var draft = typeof page.dr !== 'undefined' ? page.dr : false;

        if (subpages && subpages.length > 0) {
          var pageId = 'page-' + getRandom(100000) + '-' + normalizeId(page.i),
              $collapse = $('<div class="collapse" id="'+ pageId + '" />');

          if (page && page.u.indexOf("/releasenotes/") === 0) {
            subpages = sortOnVersion(subpages);
          }

          subpages = sortOnMenuOrders(subpages);

          $item.append(addExpandLink(pageId, title, page.u, draft));
          $collapse.append(addPages(subpages, data));
          $item.append($collapse);
        } else {
          $item.append(addNormalLink(title, page.u, draft));
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
      var catDraft = catPage && catPage.length === 1 ? (typeof catPage[0].dr !== 'undefined'? catPage[0].dr : false) : false;

      if (catUrl && catUrl.indexOf("/releasenotes/") === 0){
        getPages = sortOnVersion(getPages);
      }

      getPages = sortOnMenuOrders(getPages);

      if (getPages.length === 0 && catUrl) {
        $cat.append(addNormalLink(cat, catUrl, catDraft));
      } else if (getPages.length > 0) {
        var catId = spaceID + '-cat-' + id,
            $collapse = $('<div class="collapse" id="'+ catId + '" />'),
            isDraft = catPage.length === 1 ? (typeof catPage[0].dr !== 'undefined' ? catPage[0].dr : false) : false;

        $cat.append(addExpandLink(catId, cat, catPage.length === 1 ? catPage[0].u : null, isDraft));
        $collapse.append(addPages(getPages, data));
        $cat.append($collapse);
      } else {
        console.warn(cat + ' has no page and no subpages, skipping');
      }

      return $cat;
    }

    function hasPathInData(data, main) {
      if (main.u && main.u === window.location.pathname) {
        return true;
      }
      if (data.pages) {
        var filtered = data.pages
          .map(function (page) { return page.u.replace(window.location.pathname, '')})
          .filter(function (u) { return u === '' || u === '/' });
        return filtered.length > 0;
      }
      return false;
    }

    function menu(element, data, callback) {
      var $menu = $(element),
          $source = $menu.data('source');
      if (data.categories && data.pages) {
        var mainPage = data.pages.filter(function (page) { return page.m });
        var space = $source.replace('/json/', '').replace('.json', '');
        if (mainPage.length === 1) {
          var main = mainPage[0];
          var isDraft = typeof main.dr !== 'undefined' ? main.dr : false;
          var mainID = 'space-' + normalizeId(main.t);
          var $space = $('<div class="space" />');
          var $collapse = $('<div class="collapse" id="' + mainID + '" />');
          var title = typeof main.mt !== 'undefined' ? main.mt : main.t;
          $menu.append($space);
          var $expandLink = addExpandLink(mainID, title, main.u, isDraft);
          $space.append($expandLink);
          $space.append($collapse);
          if (hasPathInData(data, main)) {
            data.categories.forEach(function (cat) {
              $collapse.append(createCategory(space, cat, data));
            });
            callback($menu);
          } else {
            $('> .expand-link', $expandLink.parent()).one('click', function (e) {
              data.categories.forEach(function (cat) {
                $collapse.append(createCategory(space, cat, data));
              });
            });
            callback($menu);
          }
        } else {
          console.warn('Cannot find mainpage for ' + $source);
        }
      }
    }

    function hasBreadCrumbLink(title) {
      return $('ul.mx__breadcrumb').find('li').filter(function (){
        return $(this).text().trim() === (title + "").trim();
      }).length > 0;
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
      var hrefList = [];
      var broken = false;
      $(element).find('a').each(function () {
        var $menulink = $(this);
        if ($menulink.attr('href') === window.location.pathname) {
          var $parents = $($menulink.parents('.collapse').get().reverse()),
              $breadcrumb = $('ul.mx__breadcrumb'),
              href = $menulink.attr('href'),
              $menulinkTitle = $menulink.data('page-title') || $menulink.text(),
              $parent = $menulink.parent();

          $menulink.addClass('active');

          $parents.each(function () {
            var $collapse = $(this),
                $parentlink = $collapse.parent().find('> a.expand-link'),
                $parentA = $collapse.parent().find('> a:not(.expand-link)'),
                $title = $collapse.parent().find('> [data-page-title]');

            $collapse.addClass('in');
            $parentlink.attr('aria-expanded', 'true');

            if ($title && $title.length) {
              var dataTitle = $title.data('page-title') || $title.text();
              found = true;
              $title.addClass('sub-active');
              if (!hasBreadCrumbLink(dataTitle)) {
                if ($title.attr('href')) {
                  $breadcrumb.append('<li><a href="' + $title.attr('href') + '" title="' + dataTitle + '">' + dataTitle + '</a></li>');
                } else {
                  $breadcrumb.append('<li>' + dataTitle + '</li>');
                }
              }
            }

            if ($parentA && $parentA.attr('href')) {
              hrefList.push({
                title: $parentA.text(),
                href: $parentA.attr('href')
              });
            } else {
              broken = true;
            }

          });

          if (!broken) {
            hrefList.push({
              title: $menulinkTitle,
              href: href
            });
            var schema = {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item":
                  {
                    "@type": "WebSite",
                    "@id": "https://docs.mendix.com",
                    "name": "Mendix Documentation"
                   }
                }
              ]
            };

            $.each(hrefList, function (index, item) {
              schema.itemListElement.push({
                "@type": "ListItem",
                "position": index + 2,
                "item":
                {
                  "@type": "WebPage",
                  "@id": "https://docs.mendix.com" + item.href,
                  "name": item.title
                 }
               });
            });

            $( "<script/>", {
              "type": "application/ld+json",
              "html":JSON.stringify(schema, null, 4)
            }).appendTo( "head" );
          }

          if (!hasBreadCrumbLink($menulink.text())) {
            $breadcrumb.append('<li><a href="' + href + '" title="' + $menulinkTitle + '">' + $menulinkTitle + '</a></li>');
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

    var $menus = $('.menu');
    var isTest = $('body').hasClass('test');
    var lastBuild = $('meta[property="og:updated_time"]').attr('content');
    var cacheBust = lastBuild ? '?q=' + +(new Date(lastBuild)) : '';
    if (!window.__mxDocsInIframe && $menus.length) {
      $.get('/json/spaces.json' + (isTest ? cacheBust : ''), function( data ) {
        window.__mxMenuItems = data;
        $menus.each(function () {
          if ($(this).hasClass('menu--draft') && !$('body').hasClass('test')) {
            return true;
          }
          var source = $(this).data("source");
          if (source) {
            var filtered = data.filter(function (s) { return s.filename === source });
            if (filtered.length === 1) {
              menu(this, filtered[0].content, walkmenu);
            } else {
              console.warn('Cannot find menu for :' + source);
            }
          }
        });
      })
    }

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
    if (!window.__mxDocsInIframe && $toc.length === 1) {
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
      if (window.__mxDocsInIframe) {
        console.warn('Page in iframe, disabling Intercom');
        window.Intercom('shutdown');
        return;
      }
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
      loadIntercom();
    }

  });
})(jQuery));
