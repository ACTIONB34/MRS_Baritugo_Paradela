function getMovieId(movieId) {
    "use strict";
    if (!localStorage.getItem("temp")) {
        localStorage.setItem("temp", movieId);
    } else {
        localStorage.removeItem("temp");
        localStorage.setItem("temp", movieId);
    }
}

function getSchedId(schedId) {
    "use strict";
    localStorage.removeItem("temp");
    localStorage.setItem("temp", schedId);
}

function setMovieInfo() {
    "use strict";
    var movieTitle = document.getElementById("movieTitle"),
        info = document.getElementById("subInfo"),
        synopsis = document.getElementById("movieSynopsis"),
        poster = document.getElementById("moviePoster"),
        schedTable = document.getElementById("schedules"),
        storedMovies = JSON.parse(localStorage.getItem("movies")), // stores all data from "movies"
        storedSchedules = JSON.parse(localStorage.getItem("schedules")), // stores all data from "schedules"
        movieId = localStorage.getItem("temp"), // retrieves movie ID passed from index.html
        i,
        j,
        count = 0,
        startTime = "10:00 AM",
        infoStr,
        timeStr;
    
    for (i = 0; i < storedMovies.length; i++) {
        
        // find movie based on passed ID
        if (storedMovies[i].movie_id === movieId) {
            // fill movie info
            movieTitle.innerHTML = storedMovies[i].title;
            infoStr = storedMovies[i].rating + " | " + storedMovies[i].runtime;
            info.innerHTML = infoStr;
            synopsis.innerHTML = storedMovies[i].synopsis;
            poster.src = storedMovies[i].poster;
        }
    }
    
//    // deletes temp key
//    localStorage.removeItem("temp");
    
    for (j = 0; j < storedSchedules.length; j++) {

        if (storedSchedules[j].movie_id === movieId) {
            
            timeStr = startTime + " - " + storedSchedules[j].end_time;
            
            schedTable.innerHTML += '<tr><td>' + (++count) +
                                    '</td><td>'+storedSchedules[j].date +
									'</td><td>'+ timeStr +
									'</td><td>'+storedSchedules[j].cinema +
									'</td><td>'+storedSchedules[j].price +
									'</td><td>' + '<a href="seat_selection.html"><button type="button" class="btn btn-success text-white" id="' + storedSchedules[j].sched_id + '" onclick="getSchedId(this.id)">Select</button></a></td></tr>';
        }
    }    
}

