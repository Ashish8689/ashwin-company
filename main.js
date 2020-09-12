// Navigation bar Dropdown Menu

    (function($) {

    $.fn.menumaker = function(options) {  
     var cssmenu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);

     return this.each(function() {

       $(this).find(".button").on('click', function(){

         $(this).toggleClass('menu-opened');

         var mainmenu = $(this).next('ul');
         
         if (mainmenu.hasClass('open')) { 
             mainmenu.slideToggle().removeClass('open');
         }
         else {
           mainmenu.slideToggle().addClass('open');

           if (settings.format === "dropdown") {
             mainmenu.find('ul').show();
           }
         }
       });
       cssmenu.find('li ul').parent().addClass('has-sub');

    multiTg = function() {
         cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
         cssmenu.find('.submenu-button').on('click', function() {
           $(this).toggleClass('submenu-opened');
           if ($(this).siblings('ul').hasClass('open')) {
             $(this).siblings('ul').removeClass('open').slideToggle();
           }
           else {
             $(this).siblings('ul').addClass('open').slideToggle();
           }
         });
       };

       if (settings.format === 'multitoggle') multiTg();
       else cssmenu.addClass('dropdown');
       if (settings.sticky === true) cssmenu.css('position', 'fixed');


 //  Effect after resizing the window

    resizeFix = function() {
      var mediasize = 900;
         if ($( window ).width() > mediasize){
           cssmenu.find('ul').show();

            if ($('ul').css('display','none')){
                $('ul').css('display','grid');
                $('ul ul').css('display','block');
             }

             else{
               $('ul').css('display','grid');
             }
         }

         if ($(window).width() <= mediasize) {

           if ($('ul').css('display','grid')){
                $('ul').css('display','none');
             }

             else{
               $('ul').css('display','none');
             }

              cssmenu.find('ul').hide().removeClass('open');
         }
       };

       resizeFix();
       return $(window).on('resize', resizeFix);


     });
      };
    })(jQuery);


    (function($){
    $(document).ready(function(){
    $("#cssmenu").menumaker({
       format: "multitoggle"
    });
    });
    })(jQuery);


    // ********  Navigation bar end




  // ***********************  Question bars start  ******************************

   let buttons = document.querySelectorAll("button");

   buttons.forEach(button=>{

    button.addEventListener('click', ()=>{
      const para = button.nextElementSibling;
      const paraStyle = getComputedStyle(para);

      if(paraStyle.maxHeight == "0px"){
        para.style.cssText = "max-height:200px; padding:20px;opacity:1";
      }
      else{
        para.style.cssText = "opacity:0";
      }
    })
  })




  //  *************   Javascript function scrolling up  *****************

      mybutton=document.getElementById("mybtn");

      //When the user scrolls down 20px from top of the document,butoon will appear

      window.onscroll = function(){ scrollFunction()};

      function scrollFunction(){
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
          mybutton.style.display = "block";
        }
        else{
          mybutton.style.display="none";
        }
      }

      //When the user click the button,scroll to the top of document

      function topfunction(){
        document.body.scrollTop=0;    //for Safari
        document.documentElement.scrollTop=0;    //for chrome,firefox,and other   
      }



  
  //  **************  AOS Animation  ***********

        AOS.init({
        easing:'ease',
        duration:1000,
      });


   //Jquery function count

    $( '.count').counterUp({
      delay:10,
      time:1000
    })



    // $(window).on('load',function(){
    //   $(".pre-body").css("display","none");
    // });






            
