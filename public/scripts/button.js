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