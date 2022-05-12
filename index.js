$(document).ready(function(){
   var stickyTop = $('first').offset().top;
$(window).scroll(function(){
   var windowTop = $(window).scrollTop();
   if(stickyTop < windowTop && $(".second").height() + $(".second").offset().top - $(".first").height() > windowTop){
       $('.first').css('position', 'fixed');
   }else{
       $('.first').css('position', 'relative');
   }
})
});

/*
 const Scrolling = () => {
   let ScrollingTop = document.getElementById("first").style.offset ='top';
   let windowTop = document.scrollTop
   if (ScrollingTop < windowTop && document.getElementById("second").style.height('') + document.getElementById("second").style.offset('top') - document.getElementById("fisrt").style.height() > windowTop){
      document.getElementById("first").style.position= 'fixed';

   }else{
      document.getElementById("first").style.position = 'reletive'
   }

 }*/