$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let isValid = true;

    // Validate each field
    $("#contactForm input, #contactForm textarea").each(function () {
      if ($(this).val() === "") {
        $(this).addClass("is-invalid");
        $(this).next(".invalid-feedback").show();
        isValid = false;
      } else {
        $(this).removeClass("is-invalid");
        $(this).next(".invalid-feedback").hide();
      }
    });

    // Validate checkbox
    if (!$("#gridCheck").is(":checked")) {
      $("#gridCheck").addClass("is-invalid");
      $("#gridCheck").next(".invalid-feedback").show();
      isValid = false;
    } else {
      $("#gridCheck").removeClass("is-invalid");
      $("#gridCheck").next(".invalid-feedback").hide();
    }

    // If form is valid, submit it
    if (isValid) {
      // Reset the form
      $("#contactForm")[0].reset();
      // Hide all validation messages
      $("#contactForm .is-invalid").removeClass("is-invalid");
      $("#contactForm .invalid-feedback").hide();

      // Show toast notification
      var thankYouToast = new bootstrap.Toast(
        document.getElementById("thankYouToast")
      );
      thankYouToast.show();
    }
  });
});
