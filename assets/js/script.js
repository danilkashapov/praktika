
function start() {
    // $(".time").value = $("#hours") + $("#minutes") + $("#seconds");
    let hours = $("#hours").val();
    let minutes = $("#minutes").val();
    let seconds = $("#seconds").val();
    $("#start").hide();
    // $(".time").text( "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds);
    $(".time").text(( hours < 10? '0' + hours: hours)+':'+( minutes < 10? '0' + minutes: minutes)+':'+( seconds < 10? '0'+ seconds: seconds));
    if(seconds === 0){
        if (minutes === 0) {
            if(seconds === 0) {

                alert("end");
                location.reload();
            }
        }
    }
    else {
        timer();
        function timer() {

            setTimeout(function () {

                if (seconds === 0){
                    minutes--;
                    seconds = 60;
                    if(minutes === 0 && seconds === 0){
                        hours--;
                        minutes = 59;
                    }
                }
                seconds--;
                $(".time").text(( hours < 10? '0' + hours: hours)+':'+( minutes < 10? '0' + minutes: minutes)+':'+( seconds < 10? '0'+ seconds: seconds));
                if(seconds === 0){
                    if (minutes === 0) {
                        if(seconds === 0) {

                            alert("end");
                            location.reload();
                        }
                    }
                }
                else {

                    timer();
                }

            },1000);


        }

    }
}
