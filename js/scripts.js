$(function() {

  $("#next-button").click(
    function() {
      $("#next-button").hide();
      // $("#cart-container").show(1000);
      // $(".checkout-form-container").show(1000);

      $("#cart-container").addClass("active");
      $(".checkout-form-container").addClass("active");
    }
  );

  


});


