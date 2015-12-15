 $(function(){
      // $(window).resize(function(){
      //    $('#myCarousel').height($(window).height());
      //    $('.carousel-inner').height($('#myCarousel').parent().height());
      // });
      // $('#myCarousel').height($(window).height());
      // $('.carousel-inner').height($('#myCarousel').parent().height());
      $('#myCarousel').carousel({interval: 5000});
      $('.float-li').hover(function(){//infunction
         $(this).css("background-color","#f0f0f0");
      }, function(){//outfunction
         $(this).css("background-color","white");
      });
      $('[data-toggle="popover"]').popover();
});

 $(document).ready(
   function(){
      $('.contact-us').popover({
         html : true,
         content : function() {
            var info = $(this).find('.contact').html();
            console.log(info);
            return info;
         }
      });
   }
);

