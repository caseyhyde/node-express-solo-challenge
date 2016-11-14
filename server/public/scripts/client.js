var jokes = [];

$(document).ready(function() {
  getJokes();

  $('button').on('click', function(event) {
    event.preventDefault();
    sendJokes();
    getJokes();
    appendJokes(jokes);
  });
  //Get jokes from server
  function getJokes() {
    $.ajax({
      type: "GET",
      url: "/jokes",
      success: function(data) {
        jokes = data;
        console.log("You got these jokes from the server: ", data);
        appendJokes(data);
      },
      error: function() {
        alert("Something went wrong!");
      }
    });
  }
  function sendJokes() {
    var newJoke = {
      whoseJoke: $('#joker').val(),
      jokeQuestion: $('#newJoke').val(),
      punchLine: $('#punchline').val()
    };
    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: newJoke,
      success: function() {
        console.log("Joke sent!");
      }
    });
  }
  function appendJokes(array) {
    $('#jokes').empty();
    for (var i = 0; i < array.length; i++) {
      $('#jokes').append('<div class="joke"><h2>' + array[i].whoseJoke +
      ':</h2><h3>' + array[i].jokeQuestion + '</h3><p>' + array[i].punchLine +
      '</p></div>');
    }
  }
});
