$(document).ready(function(){

    // setInterval()
    // setTimeout()

    // setTimeout(function(){
    //     console.log('this has happened after 5 seconds');
    // }, 5000);
    // console.log("this should happen first");
    //
    // setTimeout(function(){
    //     console.log('this has happened after 11 seconds');
    // }, 6000);

    // var int = setInterval(function(){
    //     console.log('this is happening every 2 seconds');
    // }, 2000)
    //
    // setTimeout(function(){
    //     clearTimeout(int);
    //     console.log('timeout has been cleared');
    // }, 10000)


    $('#start').click(function(){
        var seconds = 0;
        setInterval(function(){
            // console.log('this is happening every second');
            seconds++;
            console.log(seconds);
            $('#seconds').text(seconds);
        }, 1000);
    });





});
