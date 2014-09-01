$(function() {

  var subpage = $('.subpage');
  var grid = $('.colWrapper');
  var item = $('.colWrapper a')
  var figcaption = $('figcaption');
  var figimg = $('figure img');  

  subpage.add(grid).addClass('fadein');

  item.click(function() {
    grid.removeClass('fadein');
    grid.addClass('fadeout');
  });
});