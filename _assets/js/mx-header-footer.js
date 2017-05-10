// Expandable navigation (mobile)
jQuery(document).ready(function ($) {
  $(".expandableNav, h2.expandableMobileNav").append( "<span class='icon-plus'></span><span class='icon-minus'></span>");
  $("#theFooter ul a").append("<span class='icon-arrow-right'></span>");

  $("#btnMobileMenu").click(function () {
    toggleMobileNav();
    return false;
  });

  $(".expandableNav").click(function () {
    // this media query matches what we use in the responsive CSS
    var isMobile = window.matchMedia("only screen and (max-width: 870px)");
    if (isMobile.matches) {
      expandMobileMenu(this);
      return false;
    }
  });

  $(".expandableMobileNav").click(function () {
    // this media query matches what we use in the responsive CSS
    var isMobile = window.matchMedia("only screen and (max-width: 870px)");
    if (isMobile.matches) {
      expandMobileFooterMenu(this);
      return false;
    }
  });
});

function toggleMobileNav() {
  $(".headerWrapper").toggleClass("activateMobile");
}

function expandMobileMenu(theLink) {
  theSubMenu = theLink.parentNode.parentNode;
  $(theSubMenu).toggleClass("activateMobileSubMenu");
}

function expandMobileFooterMenu(theHeader) {
  theNavGroup = theHeader.parentNode;
  $(theNavGroup).toggleClass("activateMobileFooterSubMenu");
}

// Copyright etc
(function () {
  var newDate = new Date();
  jQuery('#theCopyright').html(newDate.getFullYear());
  jQuery(document).ready(function ($) {
    $(".mxid_topbar_menu a:contains('My Profile')").prop("href", "https://sprintr.home.mendix.com/link/myprofile");
    $("a.mxid_topbar_login").prop("href", "https://home.mendix.com/mxid/login?a=Confluence");
  });
  ( function( $ ) {
    var body    = $( 'body' ),
    _window = $( window );
    /**
    * Enables menu toggle for small screens.
    */
    ( function() {
      var nav = $( '#site-navigation' ), button, menu;
      if ( ! nav ) {
        return;
      }
      button = nav.find( '.menu-toggle' );
      if ( ! button ) {
        return;
      }
      // Hide button if menu is missing or empty.
      menu = nav.find( '.nav-menu' );
      if ( ! menu || ! menu.children().length ) {
        button.hide();
        return;
      }
      button.on( 'click.twentythirteen', function() {
        nav.toggleClass( 'toggled-on' );
      } );
      // Fix sub-menus for touch devices.
      if ( 'ontouchstart' in window ) {
        menu.find( '.menu-item-has-children > a' ).on( 'touchstart.twentythirteen', function( e ) {
          var el = $( this ).parent( 'li' );

          if ( ! el.hasClass( 'focus' ) ) {
            e.preventDefault();
            el.toggleClass( 'focus' );
            el.siblings( '.focus' ).removeClass( 'focus' );
          }
        } );
      }
    } )();
  } )( jQuery );
}());

function buildfootermenu(data) {
  var whichMenu = data.navigation[0].whichmenu;

  // create footer nav header
  var footerHeader = $("<h2></h2>");
  if (whichMenu == "supportMenu") {
    footerHeader.html(data.navigation[0].title).addClass("expandableMobileNav").insertBefore($("#footerButtons"));
  } else {
    footerHeader.html(data.navigation[0].title).addClass("expandableMobileNav").appendTo($("#" + whichMenu + "Footer"));
  }

  // create footer nav menu
  var footerNavMenuList = $("<ul></ul>");
  if (whichMenu == "docsMenu") {
    $(footerNavMenuList).append('<li><a href="'+ data.navigation[0].link + '">Overview</a></li>');
  } else if (whichMenu == "communityMenu") {
    $(footerNavMenuList).append('<li><a href="'+ data.navigation[0].link + '">Overview</a></li>');
  } else if (whichMenu == "supportMenu") {
    $(footerNavMenuList).append('<li><a href="'+ data.navigation[0].link + '">Support Resources</a></li>');
  }
  for ( var i=0; i < data.navigation[0].subnav.length; i++ ) {
    var theFooterListItem = $(footerNavMenuList).append('<li><a href="'+ data.navigation[0].subnav[i].link + '">' + data.navigation[0].subnav[i].title + '</a></li>');
  }
  if (whichMenu == "supportMenu") {
    footerNavMenuList.insertBefore($("#footerButtons"));
  } else {
    footerNavMenuList.insertAfter($("#" + whichMenu + "Footer h2"));
  }
}

function buildmenu(data) {
  var whichMenu = data.navigation[0].whichmenu;
  // if there are already links, that means the function has already run
  var theLinks = $("#" + whichMenu + " li a").length;

  if (theLinks == 0) {
    // create top navigation link
    var topLink = $("<a></a>");
    if (data.navigation[0].subnav.length > 0) {
      topLink.html(data.navigation[0].title).prop("href", data.navigation[0].link).addClass("hidden topLevelLink expandableNav").appendTo($("#" + whichMenu + " li"));
    } else {
      topLink.html(data.navigation[0].title).prop("href", data.navigation[0].link).addClass("hidden topLevelLink").appendTo($("#" + whichMenu + " li"));
    }
    topLink.removeClass('hidden');
    $('#startCell').removeClass('hidden');

    // create navigation menu
    if (data.navigation[0].subnav.length > 0) {
      var navMenuList = $("<ul></ul>").addClass("navMenu");
      for ( var i=0; i < data.navigation[0].subnav.length; i++ ) {
        var theListItem = $(navMenuList).append('<li><a href="'+ data.navigation[0].subnav[i].link + '">' + '<span class="' + data.navigation[0].subnav[i].icon + '"></span>' + data.navigation[0].subnav[i].title + '</a></li>');
      }
      navMenuList.insertAfter($("#" + whichMenu + " li a.topLevelLink"));
    }
  }
}
