$(document).ready(function(){
// console.log("Stopwatch");

var timer;
  var seconds = 0;
  var minutes = 0;

  $('#start').click(function(){
    $(this).hide();
    $('#pause').removeClass('d-none').show();
    setTimerInterval();
  });

  $('#pause').click(function(){
    $(this).hide();
    $('#continue').removeClass('d-none').show();
    $('#reset').removeClass('d-none').show();
    clearInterval(timer);
  });

  $('#continue').click(function(){
      $(this).hide();
      $('#reset').hide();
      $('#pause').show();
      setTimerInterval();
  });

  $('#reset').click(function(){
      $(this).hide();
      $('#start').show();
      $('#continue').hide();
      $('#minutes').text('0');
      $('#seconds').text('00');
      seconds = 0;
      minutes = 0;
  });


  function setTimerInterval(){
    timer = setInterval(function(){
      // console.log("every second");
      seconds++;
      if(seconds == 60){
        minutes++;
        seconds = 0;
        $('#minutes').text(minutes);
        // console.log("minutes");
      }
      if(seconds < 10){
        $('#seconds').text('0'+seconds);
        // console.log("seconds");
      } else {
        $('#seconds').text(seconds);
        // console.log("seconds");
      }
    }, 1000);
  }



});
