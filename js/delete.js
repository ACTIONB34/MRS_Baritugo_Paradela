/*------------------
  Reservation delete
--------------------*/

$(document).ready(function(){
  $('div #btn-delete').click(function() {
      var id = $(this).val();
      var i;
      var j;

      if(id != ""){
        var reservationsStore = JSON.parse(localStorage.getItem("reservations"));
        delete reservationsStore[id-1];
        var finalReservations = [];
        var finalReservation;

        for(i = 0, j = 0; i < reservationsStore.length; i++){
          if(reservationsStore[i] != null){
            finalReservation = {
              id: reservationsStore[i].id,
              movieId: reservationsStore[i].movieId,
              cinemaId: reservationsStore[i].cinemaId,
              seats: reservationsStore[i].seats,
              date: reservationsStore[i].date,
              showing: reservationsStore[i].showing,
              price: reservationsStore[i].price  
            };
            finalReservations[j++] = finalReservation;
          }
        }
        
        localStorage.setItem("reservations",JSON.stringify(finalReservations));
        
        //seats removal
        var seatsStore = JSON.parse(localStorage.getItem("reservedSeats"));
        console.log(seatsStore);
        var finalSeats = [];
        var finalSeat;

        for(i = 0,j = 0; i < seatsStore.length; i++){
          if(seatsStore[i].reservationid != id){
            finalSeat = {
              id: ++(finalSeats.length),
              reservationid: seatsStore[i].reservationid,
              movieId: seatsStore[i].movieId,
              cinemaId: seatsStore[i].cinemaId,
              date: seatsStore[i].date,
              showing: seatsStore[i].showing,
              seat: seatsStore[i].seat
            };
            finalSeats[j++] = finalSeat;
          }
        }
        localStorage.setItem("reservedSeats",JSON.stringify(finalSeats));
      }

      location.reload();

    });
});
