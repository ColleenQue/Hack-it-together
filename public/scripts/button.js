<<<<<<< HEAD
(function ($) {
  //Let's start writing AJAX calls!
  //page load

  //corresponds to id

  var darkButton = $("my-button")

  function myFunction() {
}

  darkButton.click(function () {
      myFunction()
  })



})(window.jQuery);
=======
$(document).on('click', '#my-button', function() {
    $.ajax({
      url: '/questions',
      method: 'GET',
      data: { myData: 'some data' },
      success: function(response) {
        console.log(response);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
>>>>>>> 499b6110e6f33ce3004a41bb383009e72d73e596
