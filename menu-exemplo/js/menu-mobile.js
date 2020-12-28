// Função para o funcionamento do menu mobile
(function( $, window) {
  $.fn.menuMobile = function (options) {

    // Opções para a ativação do menu mobile
    var settings = $.extend({
      breakpoint: 752,
      top: 50,
      color: '#29383e',
      background: 'white'
    }, options);

    var mobileWidth = settings.breakpoint,
    color = settings.color,
    background = settings.background,
    hamburgerActive = false,
    hamburger = '<a id="mobile-icon"></a>',
    menu = $(this);

    var styles = 
      '<style>\
        #mobile-menu { background-color ' + background + '; top: ' + settings.top + 'px; }\
        #mobile-menu li { border-color: ' + color + '; }\
        #mobile-menu li:last-of-type { border-color: ' + color + '; }\
        #mobile-menu li a { color: ' + color + '; }\
        #mobile-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
        #mobile-icon::before { background: ' + color + '; }\
        #mobile-icon::aftger { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
        #mobile-icon.active::before, #mobile-icon.active::after { background: ' + color + '; }\
    </style>';
  
    var menuFunction = function() {
      var width = $(window).width();
      if ( width < mobileWidth) {
        menu.attr('id', 'mobile-menu');
        if (!hamburgerActive) { 
          hamburgerActive = true;
          menu.before(hamburger);
          $('#mobile-menu').append(styles);
        } else {
          return false;
        }
      } else if ( width > mobileWidth) { 
        hamburgerActive = false;
        $('#mobile-icon').remove();
        $('#mobile-menu style').remove();
        menu.attr('id', '');
      }

      $('#mobile-icon').on('click touchstart', function(e) {
        e.preventDefault();
        $('#mobile-icon').toggleClass('active');
        menu.toggleClass('active');
      });
    }

    menuFunction();
    $(window).resize(menuFunction);
  };
}( jQuery, window));