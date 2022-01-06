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

    hoursDay.each(function() {
        var hours = parseInt($(this).attr('id'));

        if (hours === current) {
            $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description');
        } else if (current > hours) {
            $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description');
        } else {
            $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description');
        }
    })
}

timeNow();

// Local Storage

button.on('click', function(event) {
    event.preventDefault();
    var newTextEl = $(this).siblings('.col-sm-10').val().replace();
    var parentEl = $(this).parent().attr('id'); 
    localStorage.setItem(parentEl, JSON.stringify(newTextEl)); 
})



