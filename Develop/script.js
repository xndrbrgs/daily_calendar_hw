// Var List
var timeDisplayEl = $('#currentDay');

// Time displayed on header code

function displayTime() {
  var rightNow = moment().format("MMMM Do, YYYY");
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);



