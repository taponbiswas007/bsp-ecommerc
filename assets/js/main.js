$(document).ready(function(){
    $(".dropdown").hover(function(){
      $(this).find(".dropdown-menu").slideDown();
    }, function(){
      $(this).find(".dropdown-menu").slideUp();
    });
  
    $(".cart-btn").on("click", function(){
      $("#cartSidebar").toggleClass("active");
    });
  });
  