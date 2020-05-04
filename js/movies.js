/* =================================
------------------------------------
	MRS Web Movies 
	Version: 1.0
 ------------------------------------
 ====================================*/


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
    	timeslot: "6:00PM",
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
	Prices
--------------------*/
var prices = [
	{
		name: "kids",
		price: 100
	},
	{
		name: "regular",
		price: 150
	},
	{
		name: "senior",
		price: 120
	}

];




/*------------------
	Seats
--------------------*/
var seats = ["A1","A2","A3","A4","A5","A6","A7","A8"];


/*------------------
	Show Movies
--------------------*/
if(localStorage) {
  $(document).ready(function() {
    localStorage.setItem("movies",JSON.stringify(movies));

//to be used soon
    // $(".save").click(function() {
    //   // Get input name
    //   var lastName = $("#lastName").val();
      
    //   // Store data
    //     sessionStorage.setItem("last_name", lastName);
    //   alert("Your last name is saved.");
    // });
    // $(".access").click(function() {
    //   // Retrieve data
    //     alert("Hi, " + localStorage.getItem("first_name") + " " + sessionStorage.getItem("last_name"));
    // });


  });
} else {
    alert("Sorry, your browser do not support local storage.");
}

$(document).ready(function(){

  	var movies = JSON.parse(localStorage.getItem("movies"));

	$.each(movies, function(key, value) {
	var html = "";
	var fDate = new Date("2020-04-28");
	var lDate = new Date("2020-05-06");
	var mDate;
	var i;
	var j;
    var cinema = "";

	for(i = 0; i < movies.length; i++){
		mDate = new Date(movies[i].date);
        if (movies[i].cinema) {
        	cinema = 'Cinema: ';
	      for (j = 0; j < movies[i].cinema.length; j++) {
	        cinema += movies[i].cinema[j] + ' ';
	      }
	    }
		if(mDate <= lDate && mDate >= fDate){
		 html += '<div class="col-lg-4 col-md-6 feature-item">' +
		    '<a href="reservation.html" id="' + movies[i].id +'">' +
		    '<div class="thumbnail text-center">' +
		    '<img src="' + movies[i].image + '" alt="' + movies[i].name +'">'+
		    '<div class="overlay">' +
		    '<div class="caption">' +
		    'Movie: ' + movies[i].name +
		    '<br><br>' +
		    'Rating: ' + movies[i].rating +
		    '<br><br>' +
		    'Duration: ' + movies[i].duration +
		    '<br><br>' +
		    'Synopsis: ' + movies[i].synopsis +
		    '<br><br>' +
		    cinema +
		    '</div>' +
		    '</div>' +
		    '</div>' +
		    '</a>' +
		    '</div>';

		}
        cinema = "";
	}
	$("#movies").html(html);
	});
});


/*------------------
	Pass value movieId
--------------------*/
$(document).ready(function(){
	$('#col-lg-4 col-md-6 feature-item a').click(function() {
 		var id = $(this).attr("id");
		sessionStorage.setItem("movieId",id);
	});
	
});


/*------------------
	Pass selected movie for seat selection
--------------------*/
$(document).ready(function(){
	$("#selectSeats").click(function() {
 		var selectedMovie = $("#movieSelect").val();
 		var selectedDate = $("#dateSelect").val();
 		var selectedShowing = $("#showingSelect").val();
 		var selectedCinema = $("#cinemaSelect").val();
		sessionStorage.setItem("movieId",selectedMovie);
		sessionStorage.setItem("date",selectedDate);
		sessionStorage.setItem("showing",selectedShowing);
		sessionStorage.setItem("cinemaId",selectedCinema);
	});
	
});


//to be used soon
// function dateCheck() {

//     var fDate,lDate,cDate;
//     fDate = $.datepicker.parseDate('dd-mm-yy', $('#fDate').val());   
//     lDate = $.datepicker.parseDate('dd-mm-yy', $('#lDate').val());
//     cDate =  $.datepicker.parseDate("DD, MM d, yy", $('#cDate').val());

//     if((cDate <= lDate && cDate >= fDate)) {
//         alert("true");
//         return true;
//     }
//     alert("false");
//     return false;
// }


/*------------------
	Reservation Movielist Dropdown
--------------------*/

$(document).ready(function(){

	var movieslist = JSON.parse(localStorage.getItem("movies"));
	
	$.each(movieslist, function(key, value) {
	var html = '<option selected value="1">Choose a movie...</option>';
	var fDate = new Date("2020-04-28");
	var lDate = new Date("2020-05-06");
	var mDate;
	var i;
	var j;
	var movieSelectId = null;

	for(i = 0; i < movies.length; i++){
		mDate = new Date(movies[i].date);
		if(mDate <= lDate && mDate >= fDate){
		 html += '<option value="' + movieslist[i].id + '">' +
		    	 movieslist[i].name + 
		    	 '</option>';
		}
	}
	$("#movieSelect").html(html);
	});

});


/*------------------
	Reservation Showing, Cinema Dropdown
--------------------*/

$(document).ready(function(){
	$("#movieSelect").change(function() {
		var movieslist = JSON.parse(localStorage.getItem("movies"));
		var movieSelectId = $("#movieSelect").val();
		movieSelectId -= 1;
		var i;

	    var htmlDate = '<option selected>Choose a date...</option>';

		//for(i = 0; i < movieslist[movieSelectId].cinema.length; i++){
			htmlDate += '<option value="' + movieslist[movieSelectId].date + '">' +
		   					movieslist[movieSelectId].date + 
		    				'</option>';
		//}
	    
	    var htmlShowing = '<option selected>Choose a showing...</option>';
		htmlShowing += '<option value="' + movieslist[movieSelectId].timeslot + '">' +
					    movieslist[movieSelectId].timeslot + 
					    '</option>';

	    var htmlCinema = '<option selected>Choose a cinema...</option>';

		for(i = 0; i < movieslist[movieSelectId].cinema.length; i++){
			htmlCinema += '<option value="' + movieslist[movieSelectId].cinema[i] + '"> Cinema ' +
		   					movieslist[movieSelectId].cinema[i] + 
		    				'</option>';
		}
		
		$("#dateSelect").html(htmlDate);
		$("#showingSelect").html(htmlShowing);
		$("#cinemaSelect").html(htmlCinema);
	  });
	
});