var cardsContainer = $("#schedule_part .container .cards-container");

movieList.forEach(function(movie){
	cardsContainer.append(createCard(movie));
});

$(".cards.cards--two a").on("click", function() {
	sessionStorage.setItem("movieId", $(this).attr("id"));
});


function createCard(movie){
	var card = "<div class='col-lg-4 col-md-6'>" +
                	"<div class='cards cards--two'>" +
                		"<a href='movie.html' id='"+ movie.id +"'>" +
                			"<img class='img-responsive' src='img/" + movie.title.toLowerCase().replace(/ /g,"-") + ".jpg'>" +
						    "<span class='cards--two__rect'></span>" +
						    "<h3>" + movie.title + "</h3>" +
						    "<p> " + movie.duration + " mins | <i class='fa fa-star'></i> " + movie.rating + " </p>" +
						    "<span class='genre_list'>" + movie.genrelist.toString().replace(/,/g, " / ") + "</span>" +
                		"</a>" 
					"</div>" +
                "</div>";

    return card;
}