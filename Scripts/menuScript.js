$(document).ready(function () {
  // Function to open modal with data
  function openModal(name, profession, image) {
    $("#modal-name").text(name);
    $("#modal-profession").text(profession);
    $("#modal-img").attr("src", image);
    $("#exampleModal").modal("show");
  }

  // Click event handler for cards
  $(".card").click(function () {
    var name = $(this).find(".card-title").text();
    var profession = $(this).find(".card-subtitle").text();
    var image = $(this).find(".card-img").attr("src");
    $("#modal-container").load("Components/menuModal.html", function () {
      openModal(name, profession, image);
    });
  });

  // Close button click event handler
  $(document).on("click", "#modal-close-btn", function () {
    $("#exampleModal").modal("hide");
  });

  $("[id^=card]").each(function () {
    $(this).hover(
      function () {
        const cardId = $(this).attr("id"); // Get the ID of the hovered card
        const number = cardId.replace("card", ""); // Extract the number
        const componentId = `#component${number}`; // Create the corresponding component ID
        const buttonId = `#button${number}`;
        $(componentId).css("filter", "blur(5px)"); // Apply the blur effect
        $(buttonId).css("opacity", "1"); // Apply the blur effect
      },
      function () {
        const cardId = $(this).attr("id");
        const number = cardId.replace("card", "");
        const componentId = `#component${number}`;
        const buttonId = `#button${number}`;
        $(componentId).css("filter", ""); // Remove the blur effect
        $(buttonId).css("opacity", "0"); // Apply the blur effect
      }
    );
  });
});
