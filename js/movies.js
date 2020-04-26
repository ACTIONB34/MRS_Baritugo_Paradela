//test run
// window.onload = function() {
//     alert( "welcome" );
// };


var movies = [
	{
		name: "Avengers: Endgame",
		image:"./img/movies/avengersendgame.jpg",
		rating: "8.4/10",
		duration: "3h 2m",
		synopsis: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
	},
	{
		name: "Mulan",
		image:"./img/movies/mulan.jpg",
		rating: "6.8/10",
		duration: "2h 5m",
		synopsis: "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China."
	},
	{
		name: "Sonic the Hedgehog",
		image:"./img/movies/sonic.jpg",
		rating: "6.6/10",
		duration: "1h 40m",
		synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination."
	},
	{
		name: "The SpongeBob Movie: Sponge on the Run",
		image:"./img/movies/spongebob.jpg",
		rating: "7.9/10",
		duration: "1h 46m",
		synopsis: "SpongeBob and Patrick travel to the lost city of Atlantic City to solve the mysterious kidnapping of Gary the snail. They soon prove that there's nothing stronger than the power of friendship as they encounter danger and delight at every turn."
	},
	{
		name: "Free Guy",
		image:"./img/movies/freeguy.jpg",
		rating: "8.4/10",
		duration: "1h 50m",
		synopsis: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
	},
	{
		name: "The Hunt",
		image:"./img/movies/hunt.jpg",
		rating: "6.4/10",
		duration: "1h 55m",
		synopsis: "Twelve strangers wake up in a clearing. They don't know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers."
		}
];

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



//function
$(document).ready(function(){
	$.each(movies, function(key, value) {
	var html = "";
	for(var i = 0; i < movies.length; i++){
		 html += '<div class="col-lg-4 col-md-6 feature-item">' +
		    '<a href="reservation.html">' +
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
		    '</div>' +
		    '</div>' +
		    '</div>' +
		    '</a>' +
		    '</div>';
		}

	$("#movies").html(html);

	});
});

