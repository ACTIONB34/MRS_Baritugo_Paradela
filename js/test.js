if(localStorage) {
  $(document).ready(function() {
    $(".save").click(function() {
      // Get input name
      var lastName = $("#lastName").val();
      
      // Store data
        sessionStorage.setItem("last_name", lastName);
      alert("Your last name is saved.");
    });
    $(".access").click(function() {
      // Retrieve data
        alert("Hi, " + localStorage.getItem("first_name") + " " + sessionStorage.getItem("last_name"));
    });
  });
} else {
    alert("Sorry, your browser do not support local storage.");
}