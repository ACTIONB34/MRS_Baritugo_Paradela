/* =================================
------------------------------------
  MRS Web Reservation Test
  Version: 1.0
 ------------------------------------
 ====================================*/

//test run
// window.onload = function() {
//     alert( "welcome" );
// };


/*------------------
  Reservations
--------------------*/
var reservations = [
  {
    id: 1,
    movie_id: 1,
    cinema_id: 3,
    seats:["A1","A2","A3"],
    date: "2020-04-28",
    showing: "3:00 PM",
    price: 450
   
  },
  {
    id: 2,
    movie_id: 1,
    cinema_id: 2,
    seats:["A1","A2","A3"],
    date: "2020-04-28",
    showing: "3:00 PM",
    price: 450
  }
];


/*------------------
  Reserved Seats
--------------------*/
var reservedSeats = [
  {
    id: 1,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A1"
  },
  {
    id: 2,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A2"
  },
  {
    id: 3,
    movie_id: 1,
    cinema_id: 3,
    date: "2020-04-28",
    seat: "A3"
  }

];


/*
to show seats that are reserved and not:
movie, cinema,

if movieid & cinemaid & date

*/


if(localStorage) {
  $(document).ready(function() {
    localStorage.setItem("reservations",JSON.stringify(reservations));
    localStorage.setItem("reservedSeats",JSON.stringify(reservedSeats));
    //some code here


  });
} else {
    alert("Sorry, your browser do not support local storage.");
}

/*function addSeats(){

}*/

function addReservation(){
  var reservations = {
    id: ++(reservations.length),
    movie_id: $("#movie_id").val(),
    cinema_id: $("cinema_id").val(),
    seats:["A1","A2","A3"], //to be edited
    date: $("date").val(),
    showing: $("showing").val(),
    price: 450
  }

  //add seats here
  

}

function removeReservation(){

}

function removeSeats(){

}

function cost(){

}