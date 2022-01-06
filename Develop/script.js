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

$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    var newTextEl = $(this).siblings('.col-sm-10').val().replace();
    var parentEl = $(this).parent().attr('id'); 
    localStorage.setItem(parentEl, JSON.stringify(newTextEl)); 
})

$('#9 textarea').val(localStorage.getItem('9').replace());
$('#10 textarea').val(localStorage.getItem('10').replace());
$('#11 textarea').val(localStorage.getItem('11').replace());
$('#12 textarea').val(localStorage.getItem('12').replace());
$('#13 textarea').val(localStorage.getItem('13').replace());
$('#14 textarea').val(localStorage.getItem('14').replace());
$('#15 textarea').val(localStorage.getItem('15').replace());
$('#16 textarea').val(localStorage.getItem('16').replace());
$('#17 textarea').val(localStorage.getItem('17').replace());

