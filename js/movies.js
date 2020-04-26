window.onload = function() {
 
    alert( "welcome" );
 
};


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



// function listProducts(prods) {
//   let product_names = [];
//   for (let i=0; i<prods.length; i+=1) {
//    product_names.push(prods[i].name);
//   }
//   return product_names;
// }
// console.log(listProducts(products));
// function totalValue(prods) {
//   let inventory_value = 0;
//   for (let i=0; i<prods.length; i+=1) {
//     inventory_value += prods[i].inventory * prods[i].unit_price;
//   }
//   return inventory_value;
// }
// console.log(totalValue(products));




// var x, txt = "";


// for (x in movies) {
// 	test =	"<div class="col-lg-4 col-md-6 feature-item">\n"+
// 			"<a href="reservation.html">\n"+
// 			"<div class="thumbnail text-center">\n"+
//          	"<img src="./img/movies/avengersendgame.jpg" alt="Avengers: Endgame">\n"+
//             "<div class="overlay">\n"+
//             "<div class="caption">\n" +
//             movies[x].name + " " +  movies[x].rating + " " +  movies[x].duration + " " +  movies[x].synopsis +
//             "</div>\n"+
//             "</div>\n"+
//             "</div>\n"+
// 			"</a>\n" +
//             "</div>\n";



// 	txt += movies[x].name + " " +  movies[x].raing + " " +  movies[x].duration + " " +  movies[x].synopsis;
// };

// document.getElementById("demo").innerHTML = txt;



$(document).ready(function(){
	$.each(movies, function(key, value) {
	for(var i = 0; i < movies.length; i++){
		  $("#demo").html(
		    '<div class="col-lg-4 col-md-6 feature-item">' +
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
		    'Synopsis: ' + movies[i].Synopsis +
		    '</div>' +
		    '</div>' +
		    '</div>' +
		    '</a>' +
		    '</div>'
		  );
		}

	});
});


// var res = {
//   promo_name: "value",
//   discount_type: "value",
//   discount: "value",
//   products: [{id: 1,name: 'name'},
//              {id: 2,name: 'name'}]
// };

// $.each(res, function(key, value) {
// 	var o =
//   $("#demo").show();
//   $("#demo").html(
//     '<div class="alert alert-success">' +
//     '<h4>Promotion Details</h4>' +
//     '<hr>' +
//     '<p>Promotion: ' + res.promo_name + '</p>' +
//     '<p>Discount type: ' + res.discount_type + '</p>' +
//     '<p>Amount: ' + res.discount + '%</p>' +
//     '<p>Products: ' + (res.products ? res.products.length : 0) + '</p>' +
//     '</div>'
//   );

// });