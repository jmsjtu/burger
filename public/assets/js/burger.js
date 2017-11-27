// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  // Use standard function in this case to keep this binding
  $(".devour").on("click", function(event) {
    let id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      res => {
        console.log("updated", res);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
  
