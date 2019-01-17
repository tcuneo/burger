$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newState = 1;
  
      var newBurgerState = {
        devoured: newState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devoured to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });    
     
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
