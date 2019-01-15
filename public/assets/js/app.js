$(document).ready(function () {
  $(function () {
    $(".updateBurger").on("click", function (event) {
      console.log(this)
      let id = $(this).attr("id");
      console.log(id);
      let newDevouredState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(location.reload());
    });
  });
});