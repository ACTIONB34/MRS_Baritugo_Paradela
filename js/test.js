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
      timeslot: "8:00PM",
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
      timeslot: "8:00PM",
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
      timeslot: "8:00PM",
    synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination."
  },
  {
    id: 4,
    name: "The SpongeBob Movie: Sponge on the Run",
    image:"./img/movies/spongebob.jpg",
    rating: "7.9/10",
    duration: "1h 46m",
    date: '2020-05-04',
    cinema: [1,2],
      timeslot: "8:00PM",
    synopsis: "SpongeBob and Patrick travel to the lost city of Atlantic City to solve the mysterious kidnapping of Gary the snail. They soon prove that there's nothing stronger than the power of friendship as they encounter danger and delight at every turn."
  },
  {
    id: 5,
    name: "Free Guy",
    image:"./img/movies/freeguy.jpg",
    rating: "8.4/10",
    duration: "1h 50m",
    date: '2020-05-04',
    cinema: [3],
      timeslot: "8:00PM",
    synopsis: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
  },
  {
    id: 6,
    name: "The Hunt",
    image:"./img/movies/hunt.jpg",
    rating: "6.4/10",
    duration: "1h 55m",
    date: '2020-05-04',
    cinema: [4],
      timeslot: "8:00PM",
    synopsis: "Twelve strangers wake up in a clearing. They don't know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers."
  }
];

/*------------------
  Reservations
--------------------*/
var reservations = [
  {
    id: null,
    movieId: null,
    cinemaId: null,
    seats: null,
    date: null,
    showing: null,
    price: null 
  }
];




/*------------------
  Show Reservation
--------------------*/

//if(localStorage) {
  //var reservations = [];
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
        html += '<tr><th scope="row">' + (i+1) + '</th>'+
          '<td>' + movieName +'</td>'+
          '<td>' + reservations[i].date +'</td>'+
          '<td>' + reservations[i].showing +'</td>'+
          '<td> Cinema ' + reservations[i].cinemaId +'</td>'+
          '<td>' +
          '<a href value="' + reservations[i].id + '" ' + 
          'class="reservation-action" data-toggle="modal" ' + 
          'data-target="#exampleModalLong' + reservations[i].id + '"><i class="fa fa-eye"></i></a>' +
          '<a href value="' + reservations[i].id + '" ' + 
          'class="reservation-delete" data-toggle="modal" ' +
          'data-target="#exampleModalLongDel' + reservations[i].id + '"><i class="fa fa-trash"></i></a>'+
          '<div class="modal fade" ' + 
          'id="exampleModalLong' + reservations[i].id + 
          '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
          '<div class="modal-dialog" role="document">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title" id="exampleModalLongTitle">Reservation Detail</h5>' +
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
          '</button>' +
          '</div>' + //modal below
          '<div class="modal-body">' +
          '<div class="container-fluid">' +
          '<div class="row">' +
          '<div class="col-md-12" id="modalsample">' +
          '<h5>Movie</h5>' +
          '<hr>' +
          '<h6>' + movieName + '</h6>' +
          '<h5>Cinema Details</h5>' +
          '<hr>' +
          '<h6>' + reservations[i].date +'</h6>' +
          '<h6>Cinema ' + reservations[i].cinemaId + ' - ' + reservations[i].showing + '</h6>' +
          '<h5>Seats</h5>' +
          '<hr>' +
          '<h6>['+ reservations[i].seats +']</h6>' +
          '<h6>Total Cost: ₱' + reservations[i].price +'</h6>' +
          '<br><br>' +
          '</div>' +
          '</div>' +
          '<div class="row">' +
          '</div>' +
          '<div class="row">' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' + //delete modal below
          '<div class="modal fade bd-example-modal-sm" ' + 
          'id="exampleModalLongDel' + reservations[i].id + 
          '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
          '<div class="modal-dialog modal-sm" role="document">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title" id="exampleModalLongTitle">Are you sure?</h5>' +
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
          '</button>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
          '<button id="btn-delete" value="'+ reservations[i].id +
          '" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</td>' + 
          '</tr>';

      }

    }
    $("#reservations").html(html);
    });
  });


/*------------------
  Reservation delete
--------------------*/

/*$(document).ready(function(){
  $('button').click(function() {
      var id = $(this).val();
      var i;
      var j;

      if(id != ""){
        //console.log(id);
        var reservationsStore = JSON.parse(localStorage.getItem("reservations"));
        delete reservationsStore[id-1];
        var finalReservations = [];
        var finalReservation;

        for(i = 0; i < reservationsStore.length; i++){
          if(reservationsStore[i] != null){
            finalReservation = {
              id: ++(finalReservations.length),
              movieId: reservationsStore[i].movieId,
              cinemaId: reservationsStore[i].cinemaId,
              seats: reservationsStore[i].seats,
              date: reservationsStore[i].date,
              showing: reservationsStore[i].showing,
              price: reservationsStore[i].price  
            };
            finalReservations.push(finalReservation);
          }
        }
        
        console.log(reservationsStore);
        console.log(finalReservations);
        localStorage.setItem("reservations",JSON.stringify(finalReservations));
        location.reload();

      }
    });
  
});*/





/*------------------
  Seats
--------------------*/
$(document).ready(function(){


  var selectedSeats = [];
  if(!sessionStorage.getItem("selectedSeats")){
    sessionStorage.setItem("selectedSeats",JSON.stringify(selectedSeats));
  }

  var reservedSeats = [];
  if(!localStorage.getItem("reservedSeats")){
  localStorage.setItem("reservedSeats",JSON.stringify(reservedSeats));
  
  }

    var movies = JSON.parse(localStorage.getItem("movies"));
    var seats = " ";
    var i;
    var j;
    var text = ["A","B","C","D","E","F","G","H"];

    var movieId = sessionStorage.getItem("movieId");
    var selectedDate = sessionStorage.getItem("date");
    var selectedShowing = sessionStorage.getItem("showing");
    var selectedCinema = sessionStorage.getItem("cinemaId");

    for(i = 0; i < text.length; i++){
      seats += '<tr> + <th scope="row">' + text[i] + '</th>';
      for(j = 0; j < 8; j++){
        seats += '<td>' +
                 '<input type="checkbox" id="myCheckbox' + text[i] + (j+1) + '" value="' + text[i] + (j+1) +'"/>' +
                 '<label for="myCheckbox' + text[i] + (j+1) + '" class="seatclick">' + 
                 '<img src="./img/seat.png" id="Checkbox' + text[i] + (j+1) + '" value="' + text[i] + (j+1) +'"/></label>' +
                 '</td>';
      }
      seats +="</tr>";
    }

    $("#test").html(seats);



    //already selected seats for session
    var selectedSeatsStorage = JSON.parse(sessionStorage.getItem("selectedSeats"));
    for(i = 0; i < selectedSeatsStorage.length; i++){
      if(selectedSeatsStorage[i] != null){
        seat = '#Checkbox' + selectedSeatsStorage[i] +'';
        $(seat).attr('src',"./img/selectedseat2.png"); 
      }
     }


    //reserved seats Test 
    var reservedSeatsStorage = JSON.parse(localStorage.getItem("reservedSeats"));
   // console.log(reservedSeatsStorage);
    var reservedSeats = [];

    for(i = 0, j = 0; i < reservedSeatsStorage.length; i++){
      if((reservedSeatsStorage[i].movieId == movieId)&&(reservedSeatsStorage[i].cinemaId == selectedCinema)&&(reservedSeatsStorage[i].date == selectedDate)){
        reservedSeats[j++] = reservedSeatsStorage[i].seat;
      }
    }

    //console.log(reservedSeats);

    var seat;

    for(i = 0; i < reservedSeats.length; i++){
      seat = '#Checkbox' + reservedSeats[i] +'';
      $(seat).attr('src',"./img/reservedseat.png");
      //prevent click
      $(seat).click(function(event) {
        event.preventDefault();
      });
     }

     var currentReservation = "";


     var movieId = sessionStorage.getItem("movieId");
     var selectedDate = sessionStorage.getItem("date");
     var selectedShowing = sessionStorage.getItem("showing");
     var selectedCinema = sessionStorage.getItem("cinemaId");

     var selectedSeats = [];

     currentReservation += '<div class=" details-body highlight">' +
          '<h3>Reservation Details</h3>' +
          '<h4>' + movies[movieId-1].name + '</h4>' +
          '<h5>' + selectedDate + '</h5>' +
          '<h5>Cinema ' + selectedCinema + ' - ' + selectedShowing + '</h5>' +
          '<h5>Seats:</h5>' +
          '<h5 id = "movieSeats"></h5>' +
          '<h5 id = "seatsCost">Total Cost:</h5>'+
          '<br><br>'+
          '<a href="#" class="reserve-seats-btn" data-toggle="modal" data-target="#exampleModalLong">Proceed to Checkout</a>';
    $("#currentReservation").html(currentReservation);
});



/*------------------
  Seats Selection
--------------------*/   
$(document).ready(function(){

  var selectedSeats = [];
  if(!sessionStorage.getItem("selectedSeats")){
    sessionStorage.setItem("selectedSeats",JSON.stringify(selectedSeats));
  }

 $('td img').click(function(e){
      e.preventDefault();
      var selectedSeat = "./img/selectedseat2.png";
      var reservedSeat = "./img/reservedseat.png";
      var seat = "./img/seat.png";
      var curr = $(this).attr('src');
      var selected = "";
      var exist = false;
      var i;
      var j;

      var selectedSeatsStorage = JSON.parse(sessionStorage.getItem("selectedSeats"));
      var selectedSeatsFor = JSON.parse(sessionStorage.getItem("selectedSeats"));


      if(curr == reservedSeat){
        $(this).click(function(event) {
          event.preventDefault();
        });
      }
      else if(curr == selectedSeat){
        $(this).attr('src',"./img/seat.png");

        selected = $(this).attr('value');
        tmp = JSON.parse(sessionStorage.getItem("selectedSeats"));
        
        //remove
        for(i = 0; i < selectedSeatsFor.length; i++){
            if(selected == selectedSeatsFor[i]){
              j = i;
              break;
            }
        }
        delete tmp[j];
        sessionStorage.setItem("selectedSeats", JSON.stringify(tmp));
        return false;
      }
      else {
        $(this).attr('src',"./img/selectedseat2.png");
        selected = $(this).attr('value');
        selectedSeatsStorage.push(selected);

        //no duplicate
        for(i = 0; i < selectedSeatsFor.length; i++){
            if(selected == selectedSeatsFor[i]){
              exist = true;
            }
        }

        //add to session
        if(exist == false){
          sessionStorage.setItem("selectedSeats",JSON.stringify(selectedSeatsStorage));
          console.log(selected);
          return false;
        }
      }
 });

});  


/*------------------
  Seats update
--------------------*/

$(document).ready(function(){
  $('td img').click(function() {
    var seatsList = JSON.parse(sessionStorage.getItem("selectedSeats"));
    var i;
    var htmlSeats = '';
    var htmlCost = '';
    var count = 0;
    var price = 150;
    var cost;

    for(i = 0; i < seatsList.length;i++){
      if(seatsList[i] != null){
        htmlSeats += seatsList[i] + ' ';
        count++;
      }
    }
    //cost of reservation
    cost = count*price;
    htmlCost = 'Total Cost: ₱' + cost;

    sessionStorage.setItem("cost",cost);


    $("#movieSeats").html(htmlSeats);
    $("#seatsCost").html(htmlCost);
    });
  
});