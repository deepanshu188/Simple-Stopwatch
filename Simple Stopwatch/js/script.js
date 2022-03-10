let timerAnimation;
let clockAnimation;
let pause = false;
let dMin = 0;
let dSec = 1;
let miliSec = 0;
let i = 0;
let blink;
let timer;
let sec;
let min;
let laps;
let lapCount = 0;
let lapContainer = document.querySelector(".lapContainer");
let lapBtn = document.querySelector(".lapBtn");
let loader = document.querySelector(".loader");

function invisible() {

    timer.style.visibility = 'hidden'
    sec.style.visibility = 'hidden'
    min.style.visibility = 'hidden'
}

function visible() {

    timer.style.visibility = 'visible'
    sec.style.visibility = 'visible'
    min.style.visibility = 'visible'
}

const start = () => {

timer = document.querySelector('.timer')
sec = document.querySelector('.sec')
min = document.querySelector('.min')
let stop = document.querySelector('.stop')
let start = document.querySelector('.start')
stop.style.display = 'inline';
lapBtn.style.visibility = 'visible';
loader.style.visibility = 'visible';

if(pause)
{
    stop.innerHTML = 'Reset';
    clearInterval(timerAnimation)
    clearInterval(clockAnimation)
    start.innerHTML = 'Start';
    lapBtn.style.visibility = 'hidden';
    loader.style.visibility = 'hidden';
    pause = false
    i = 0;
    
  blink = setInterval(() => {
  
        if(i === 0 || i === 2)
        {
            invisible();
        } else if(i === 1 || i === 3) {
            visible();
        } else {
            clearInterval(blink)
        }
        
        i++;
        
    },500)
    
} else {

    pause = true;
    start.innerHTML = 'Pause';
    stop.innerHTML = 'Stop';
    clearInterval(blink);
    visible();

timerAnimation = setInterval(() => {
    
    if(miliSec < 60)
    {   
        (miliSec < 10) ? timer.textContent = `0${miliSec}` : timer.textContent = miliSec;
        miliSec++;
    } else
        miliSec = 0;
}, 1)

clockAnimation = setInterval(() => {
    
    if(dSec < 60)
    {
        (dSec < 10) ? sec.textContent = `0${dSec}` : sec.textContent = dSec;
        dSec++;
    } else {
        dSec = 0
        sec.textContent = `0${dSec}`
        dSec++;
        dMin++;
        (dMin < 10) ? min.textContent = `0${dMin}` : min.textContent = dMin;
    }
}, 1000)
    }
}

const stop = () => {

timer.textContent = '00'
sec.textContent = '00'
min.textContent = '00'
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
loader.style.visibility = 'hidden';
lapContainer.style.display = 'none';
clearInterval(timerAnimation)
clearInterval(clockAnimation)
dMin = 0;
dSec = 1;
miliSec = 0;
pause = false
start.innerHTML = 'Start';
stop.style.display = 'none';
lapBtn.style.visibility = 'hidden';
clearInterval(blink);
visible();

lapContainer.innerHTML = "";
lapCount = 0;
}

const startLap = () => {

    lapCount++
    laps = document.createElement("p");
    let lapData = document.createTextNode(`#${lapCount} ${dMin}: ${dSec-1}. ${miliSec}`);
    laps.appendChild(lapData);
    lapContainer.appendChild(laps);
    lapContainer.style.display = 'block';
}