/* =================================
------------------------------------
  MRS Web Checkout
  Version: 1.0
 ------------------------------------
 ====================================*/


/*------------------
  Reserved Seats
--------------------*/
var reservedSeats = [
  {
    id: 1,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A6"
  },
  {
    id: 2,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A7"
  },
  {
    id: 3,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A8"
  }

];


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


/*------------------
  Add Reservation
--------------------*/

$(document).ready(function(){
    var reservations = JSON.parse(localStorage.getItem("reservations"));

    if(!localStorage.getItem("reservedSeats")){
      localStorage.setItem("reservedSeats",JSON.stringify(reservedSeats));
    }
    $.fn.addReservation = function(){ 
      var seatsFinalCheckout = [];  
      var i;
      var j;
      var reservation;
      var seatsReservation;
      var seatsReservationStorage;
      var movies = JSON.parse(localStorage.getItem("movies"));
      var seatsCheckoutList = JSON.parse(sessionStorage.getItem("selectedSeats"));
      var reservedSeats = JSON.parse(localStorage.getItem("reservedSeats"));

      var movieId = sessionStorage.getItem("movieId");

      var movieName = movies[movieId-1].name;
      var movieDate = sessionStorage.getItem("date");
      var movieCinema = sessionStorage.getItem("cinemaId");
      var movieShowing = sessionStorage.getItem("showing");
      var movieCinemaShowing = movieCinema + " - " + movieShowing;
      
      var movieCost = sessionStorage.getItem("cost");


      for(i = 0, j = 0; i < seatsCheckoutList.length; i++){
        if(seatsCheckoutList[i] != null){
          seatsFinalCheckout[j++] = seatsCheckoutList[i];
        }
      }


      var reservation = {
        id: ++(reservations.length),
        movieId: movieId,
        cinemaId: movieCinema,
        seats: seatsFinalCheckout,
        date: movieDate,
        showing: movieShowing,
        price: movieCost
      };

      //reservedseats
      for(i = 0; i < seatsFinalCheckout.length; i++){
        seatsReservation = {
          id: ++(reservedSeats.length),
          movieId: movieId,
          cinemaId: movieCinema,
          date: movieDate,
          seat: seatsFinalCheckout[i]
        };
        seatsReservationStorage = JSON.parse(localStorage.getItem("reservedSeats"));
        seatsReservationStorage.push(seatsReservation);
        localStorage.setItem("reservedSeats",JSON.stringify(seatsReservationStorage));

      }

      var reservationsStorage = JSON.parse(localStorage.getItem("reservations"));
      reservationsStorage.push(reservation);
      localStorage.setItem("reservations",JSON.stringify(reservationsStorage));
      sessionStorage.clear();
      //location.reload();

      var success = '<div class="col-lg-12">' +
                    '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                    '<h4 class="alert-heading">Successfully Reserved!</h4>' +
                    '<hr>' +
                    '<p class="mb-0">Yay! Thank you for reserving at MovieRocket!</p>' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>';

      $('#exampleModalLong').modal('toggle');
      $("#success").html(success);
    }

    $("#add-btn").click(function(){
        $.fn.addReservation();
    });

});
