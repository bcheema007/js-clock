let div = document.querySelector('div');

let time = "";

let hours;

let minutes;

let seconds;

let setTime = setInterval(timeChange, 1000);

function timeChange() {

    const dateObj = new Date();

    hours = dateObj.getHours();
    if(hours < 12) {
        hours = "0" + hours;
    }
    
    minutes = dateObj.getMinutes();
    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    seconds = dateObj.getSeconds();
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    time = hours + ":" + minutes + ":" + seconds;
    div.textContent = time;
}

