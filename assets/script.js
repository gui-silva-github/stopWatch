let [seconds, minutes, hours] = [0,0,0];

let display = document.querySelector('#display');

let timer = null;


function watchStop(){
    seconds++;
    if (seconds==60){
        seconds=0;
        minutes++;
        if (minutes==60){
            minutes=0;
            hours++;
        }
    }
    display.innerHTML = fixeZero(hours) + ":" + fixeZero(minutes) + ":" + fixeZero(seconds);
};

function fixeZero(time){
    return time < 10 ? `0${time}` : `${time}`;
};   

function startWatch(){
    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(watchStop, 1000);
};

function stopWatch(){
    clearInterval(timer);
};

function resetWatch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    display.innerHTML = "00:00:00";
};