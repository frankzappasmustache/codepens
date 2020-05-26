/*
Instructions: 

Using css and JS modify the form as follows. Only display the review text box if the user selects "Yes". Hide the thank you message until form has been submitted.

*/

$(document).ready(function () {
  /* add your code here */

  $("input[name='review']").change(function () {
    if ($(this).val() == "Yes") {
      $("#opt").addClass("show");
    } else {
      $("#opt").removeClass("show");
    }
  });
});

function submitForm() {
  $("form").hide();
  $("#thankumsg").show();
}
