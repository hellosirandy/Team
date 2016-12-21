$(document).ready(function() {
  $('.datepicker').pickadate({
    selectYears: 80, // Creates a dropdown of 15 years to control year
    selectMonths: true, // Creates a dropdown to control month
    max: new Date()
  });
});
