const time = document.getElementById('time')
const startbutton = document.getElementById("startbutton")


var startTime,timeNow, diff, id;
var stoptime = 0;
var run = false
function firststart(){
    if(!run){
        startTime = new Date().getTime()
        startbutton.onclick = start;
        start()
    }
}
function start(){
    if(!run){
        if(stoptime){
            timeNow = new Date().getTime()
           
            startTime += timeNow - stoptime
        }
        id = setInterval(runTime, 1);
        run = true
        startbutton.innerHTML = 'PAUSE'
    } else{
        clearInterval(id)
        stoptime =  new Date().getTime()
        run = false;
        startbutton.innerHTML = 'RESUME'
    }
}

function reset(){
        startTime = new Date().getTime()
        /* stoptime = 0 */
        runTime()
        clearInterval(id)
        stoptime =  new Date().getTime()
        run = false;
        startbutton.innerHTML = 'RESUME'
        lapnum = [0];
        document.querySelector(".all-laps").innerHTML = `<hr><li>
                <div>
                  Time Difference
                </div>
                <div>
                  Total Time
                </div>
              </li><hr>`;
        startbutton.onclick = start;
}

function runTime(){
    timeNow = new Date().getTime()
    diff = timeNow - startTime ;
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    let ms = Math.floor(diff % 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    ms = (ms < 10) ? "00" + ms : (ms < 100) ? "0" + ms : ms;
    time.innerHTML =  `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>:<span>${ms}</span>`
}
var lapnum = [0];
function lap(){
    var laph = diff;
    
    let hours = Math.floor((laph % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((laph % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((laph % (1000 * 60)) / 1000);
    let ms = Math.floor(laph % 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    ms = (ms < 10) ? "00" + ms : (ms < 100) ? "0" + ms : ms;
    
    var lapdiff = diff - lapnum[lapnum.length -1]
    let dhours = Math.floor((lapdiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let dminutes = Math.floor((lapdiff % (1000 * 60 * 60)) / (1000 * 60));
    let dseconds = Math.floor((lapdiff % (1000 * 60)) / 1000);
    let dms = Math.floor(lapdiff % 1000);
    dhours = (dhours < 10) ? "0" + dhours : dhours;
    dminutes = (dminutes < 10) ? "0" + dminutes : dminutes;
    dseconds = (dseconds < 10) ? "0" + dseconds : dseconds;
    dms = (dms < 10) ? "00" + dms : (dms < 100) ? "0" + dms : dms;
    document.querySelector(".all-laps").innerHTML += `<li><div>
                    ${dhours}:${dminutes}:${dseconds}:${dms}
                </div>
                <div>
                    ${hours}:${minutes}:${seconds}:${ms} 
                </div></li><hr>`;
    lapnum.push(laph)
}
