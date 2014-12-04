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
  // END ALL SCRIPTS
});
