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


/*
to show seats that are reserved and not:
movie, cinema,

if movieid & cinemaid & date

*/







/*------------------
  Show Reservations
--------------------*/
$(document).ready(function(){
  $.each(reservations, function(key, value) {
  var html = "";
  var fDate = new Date("2020-04-28");
  var lDate = new Date("2020-05-06");
  var mDate;
  var i;
  var j;
  var movieName = "";
  
  for(i = 0; i < reservations.length; i++){

/*    for(j = 0; j < movies.length; j++){     
      if(reservations[i].movieId == movies[j].id){
        console.log(reservations[i].movieId);
        //console.log(movies[j].id);
        
        movieName = movies[j].name;
        console.log(movieName);
      } 
    }
*/
    mDate = new Date(reservations[i].date);
    if(mDate <= lDate && mDate >= fDate){
     html += '<tr>' +
              '<th scope="row">' + ++(reservations.length) + '</th>' +
              '<td>' + movieName + '</td>' +
              '<td>' + mDate + '</td>' +
              '<td>' + reservations[i].showing + '</td>' +
              '<td>' + "Cinema " + reservations[i].cinema_id + '</td>' +
              '<td>' +
              '</td>' + 
              '</tr>';

    }
  
  }
  $("reservations").html(html);
  });
});