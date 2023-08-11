$(function() {
  $('nav a').click(function(e) {
    $.scrollTo(this.hash || 0, 700);
    e.preventDefault();
  });
});