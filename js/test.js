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
  Movies
--------------------*/
var movies = [
  {
    id: 1,
    name: "Avengers: Endgame",
    image:"./img/movies/avengersendgame.jpg",
    rating: "8.4/10",
    duration: "3h 2m",
    date: '2020-04-28',
    cinema: [1,2],
    synopsis: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
  },
  {
    id: 2,
    name: "Mulan",
    image:"./img/movies/mulan.jpg",
    rating: "6.8/10",
    duration: "2h 5m",
    date: '2020-04-28',
    cinema: [3],
    synopsis: "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China."
  },
  {
    id: 3,
    name: "Sonic the Hedgehog",
    image:"./img/movies/sonic.jpg",
    rating: "6.6/10",
    duration: "1h 40m",
    date: '2020-04-28',
    cinema: [4],
    synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination."
  },
  {
    id: 4,
    name: "The SpongeBob Movie: Sponge on the Run",
    image:"./img/movies/spongebob.jpg",
    rating: "7.9/10",
    duration: "1h 46m",
    date: '2020-04-28',
    synopsis: "SpongeBob and Patrick travel to the lost city of Atlantic City to solve the mysterious kidnapping of Gary the snail. They soon prove that there's nothing stronger than the power of friendship as they encounter danger and delight at every turn."
  },
  {
    id: 5,
    name: "Free Guy",
    image:"./img/movies/freeguy.jpg",
    rating: "8.4/10",
    duration: "1h 50m",
    date: '2020-04-28',
    synopsis: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
  },
  {
    id: 6,
    name: "The Hunt",
    image:"./img/movies/hunt.jpg",
    rating: "6.4/10",
    duration: "1h 55m",
    date: '2020-04-28',
    synopsis: "Twelve strangers wake up in a clearing. They don't know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers."
  }
];

/*------------------
  Reservations
--------------------*/
var reservations = [
  {
    id: 1,
    movieId: 2,
    cinemaId: 3,
    seats:["A1","A2","A3"],
    date: '2020-04-28',
    showing: "3:00 PM",
    price: 450   
  },
  {
    id: 2,
    movieId: 1,
    cinemaId: 2,
    seats:["A1","A2","A3"],
    date: '2020-04-28',
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




/*------------------
  Show Reservation
--------------------*/

//if(localStorage) {
  var reservations = [];
  if(!localStorage.getItem("reservations")){
  localStorage.setItem("reservations",JSON.stringify(reservations));
  
  }
  $(document).ready(function(){

    //var reservation = [];   
    var reservations = JSON.parse(localStorage.getItem("reservations"));

    $.each(reservations, function(key, value) {
    var html = "";
    var fDate = new Date("2020-04-28");
    var lDate = new Date("2020-05-06");
    var mDate;
    var i;
    var j;
    var cinema = "";
    var movieName = null;

    for(i = 0; i < reservations.length; i++){
      mDate = new Date(reservations[i].date);

      for(j = 0; j < movies.length; j++){     
        if(reservations[i].movieId == movies[j].id){  
          movieName = movies[j].name;
        } 
      }


      if(mDate <= lDate && mDate >= fDate){
       html += '<tr><th scope="row">' + reservations[i].id + '</th>'+
          '<td>' + movieName +'</td>'+
          '<td>' + reservations[i].date +'</td>'+
          '<td>' + reservations[i].showing +'</td>'+
          '<td> Cinema ' + reservations[i].cinemaId +'</td>'+
          '<td>' +
          '<a href class="reservation-action" data-toggle="modal" data-target="#exampleModalLong"><i class="fa fa-eye"></i></a>' +
          '<a href class="reservation-delete" data-toggle="modal" data-target="#exampleModalLongDel"><i class="fa fa-trash"></i></a>'+
          '</td>' + 
          '</tr>';
      }

    }
    $("#reservations").html(html);
    });
  });

//} else {
//    alert("Sorry, your browser do not support local storage.");
//}



/*------------------
  Add Reservation
--------------------*/
$(function(){
    $.fn.addReservation = function(){ 
      
      //will be edited for getting the values
      var reservation = {
        id: ++(reservations.length),
        movieId: $("#movieId").val(),
        cinemaId: $("cinemaId").val(),
        seats:["A1","A2","A3"], //to be edited
        date: $("date").val(),
        showing: $("showing").val(),
        price: 450 // to be edited
      };

      // var reservation = {
      //   id: ++(reservations.length),
      //   movieId: 1,
      //   cinemaId: 2,
      //   seats:["A1","A2","A3"],
      //   date: '2020-04-28',
      //   showing: "3:00 PM",
      //   price: 450
      // };

      var reservationsStorage = JSON.parse(localStorage.getItem("reservations"));
      reservationsStorage.push(reservation);
      localStorage.setItem("reservations",JSON.stringify(reservationsStorage));
      location.reload();

      //also add reservedSeats

    }

    $("#add-btn").click(function(){
        $.fn.addReservation();
    });

});


/*------------------
  Checkout Details
--------------------*/
$(document).ready(function(){

  var movieName = "Mulan";
  var movieDate = "2020-05-02";
  var movieCinema = "Cinema 3";
  var movieShowing = "3:00 PM"
  var movieCinemaShowing = movieCinema + " - " + movieShowing;
  var movieSeats = "A1 A2 A3"; //looped
  var movieCost = "Total Cost: ₱450";

  var movieCheckout = '<strong>' + movieName + '</strong>' +
                      '<br><br>' +
                      'Duration: 2h 5m' + //to be edited
                      '<br><br>' +
                      'Synopsis: To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China.';

  var movieCinemaDetails = '<strong>' + movieCinema + '</strong>' +
                           '<br>' +
                           '<strong>' + movieShowing + '</strong>' +
                           '<br>' +
                           '<strong>' + movieDate + '</strong>' +
                           '<br>';

  var movieSeatsDetails = movieSeats;
/*                  <strong>A1</strong> - Regular<br>
                  <strong>A2</strong> - Regular<br>
                  <strong>A3</strong> - Regular<br>*/

  var movieCostDetails = movieCost;

/*  
                  A1 - Regular.......<strong>₱150</strong><br>
                  A2 - Regular.......<strong>₱150</strong><br>
                  A3 - Regular......<strong>₱150</strong><br><br>
                  <strong>Total: ₱450</strong>*/

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