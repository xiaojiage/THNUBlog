 $(function(){
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
      // $('.contact-us').popover({
      //    html : true,
      //    content : function() {
      //       var info = $(this).next().html();
      //       console.log(info);
      //       return info;
      //    }
      // });
      $('.contact-us').popover({
         html : true,
         content : function() {
            var info = $(this).next().html();
            console.log(info);
            return info;
         }
      });
   }
);

