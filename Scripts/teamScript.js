$(document).ready(function () {
  // Function to open modal with data
  function openModal(name, profession) {
    $("#modal-name").text(name);
    $("#modal-profession").text(profession);
    $("#exampleModal").modal("show");
  }

  // Click event handler for cards
  $(".card").click(function () {
    var name = $(this).find(".card-title").text();
    var profession = $(this).find(".card-subtitle").text();
    $("#modal-container").load("./Components/teamModal.html", function () {
      openModal(name, profession);
    });
  });

  // Close button click event handler
  $(document).on("click", "#modal-close-btn", function () {
    $("#exampleModal").modal("hide");
  });
});
