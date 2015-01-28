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



  // MEGAMENU DROPDOWN TOGGLE HOVER/CLICK
  // Dropdown Menu Fade



  // END ALL SCRIPTS
});

jQuery(document).ready(function(){
  $(".dropdown").click(
    function() { $('.dropdown-menu', this).slideToggle("fast");
  });
});
