// Var List
var timeDisplayEl = $('#currentDay');

// Time displayed on header code

function displayTime() {
  var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// Time assigned for each row

function timeNow() {
    var current = moment().hours();
    var hoursDay = $('.time-block'); 
}

