$(function() {

  var uparrow = $('#uparrow');

  uparrow.each(function(){
      $(this).click(function(){ 
          $('html,body').animate({ scrollTop: 0 }, 'normal');
          return false; 
      });
  });

});