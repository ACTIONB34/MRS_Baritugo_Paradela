/*------------------
  Checkout Details
--------------------*/
$(document).ready(function(){

  var movies = JSON.parse(localStorage.getItem("movies"));
  var seatsCheckoutList = JSON.parse(sessionStorage.getItem("selectedSeats"));

  var movieId = sessionStorage.getItem("movieId");

  var movieName = movies[movieId-1].name;
  var movieDate = sessionStorage.getItem("date");
  var movieCinema = 'Cinema ' + sessionStorage.getItem("cinemaId");
  var movieShowing = sessionStorage.getItem("showing");
  var movieCinemaShowing = movieCinema + " - " + movieShowing;
  var movieSeats = ""; //looped
  var movieCost = 'Total Cost: ₱' + sessionStorage.getItem("cost");
  var i;

  var movieCheckout = '<strong>' + movieName + '</strong>' +
                      '<br><br>' +
                      'Duration: ' + movies[movieId-1].duration +
                      '<br><br>' +
                      'Synopsis: ' + movies[movieId-1].synopsis;

  var movieCinemaDetails = '<strong>' + movieCinema + '</strong>' +
                           '<br>' +
                           '<strong>' + movieShowing + '</strong>' +
                           '<br>' +
                           '<strong>' + movieDate + '</strong>' +
                           '<br>';

  for(i = 0; i < seatsCheckoutList.length;i++){
    if(seatsCheckoutList[i] != null){
      movieSeats += seatsCheckoutList[i] + ' ';
    }
  }  

  var movieSeatsDetails = movieSeats;

  var movieCostDetails = '<strong>' + movieCost + '</strong>';



  //details
  $("#movieCheckout").html(movieCheckout);
  $("#movieCinemaDetails").html(movieCinemaDetails);
  $("#movieSeatsDetails").html(movieSeatsDetails);
  $("#movieCostDetails").html(movieCostDetails);

  //summary  
  $("#movieName").html(movieName);
  $("#movieDate").html(movieDate);
  $("#movieCinemaShowing").html(movieCinemaShowing);
  $("#movieSeats").html(movieSeats);
  $("#movieCost").html(movieCost);
});
