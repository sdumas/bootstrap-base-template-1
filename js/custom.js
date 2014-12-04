// OFFCANVAS SCRIPTS

$('document').ready(function () {
  $('.navbar-toggle').on('click', function () {
    $('.collapse, .main-content-container').toggleClass('in');
  });
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    $('.collapse, .main-content-container').removeClass('in');
  }

  // STOP PROPAGATION SCRIPT

  $(document).on('click', '.dropdown-menu', function(e) {
    e.stopPropagation();
  });

  // END ALL SCRIPTS
});

// Dropdown Menu Fade
jQuery(document).ready(function(){
  $(".dropdown").click(
    function() { $('.dropdown-menu', this).fadeToggle("fast");
});
});
