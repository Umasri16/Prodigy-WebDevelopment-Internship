let playBtn=document.getElementById("play-btn")
let resetBtn=document.getElementById("reset-btn")
let lapBtn=document.getElementById("lap-btn")
let timedisplay=document.getElementById("time-display")
let clearall=document.getElementById("clear-all")

let lapList = document.querySelector(".table-item");
let lapCounter = 1;

let milliseconds=0,secs=0,mins=0,hr=0;
let h,m,s,ms;
let uniqueid;

playBtn.onclick=function(){
    if (playBtn.textContent === "Play") {
        playBtn.textContent = "Pause";
        uniqueid = setInterval(displayTime, 10);
        resetBtn.classList.remove("hide");
        lapBtn.classList.remove("hide");
    } else {
        playBtn.textContent = "Play";
        clearInterval(uniqueid);
    }
}

function displayTime(){
    milliseconds=milliseconds+10;
   if(milliseconds===1000){
    secs=secs+1;
    milliseconds=0;
    if(secs == 60){
        mins=mins+1;
        secs=0;
        if(mins == 0){
            hr=hr+1;
            mins=0;
           }
       }
   }


if(hr<10){
    h="0"+hr
}
else{
    h=hr
}

if(mins<10){
    m="0"+mins
}
else{
    m=mins
}

if(secs<10){
    s="0"+secs 
}
else{
    s=secs
}

if(milliseconds<10){
    ms="00"+milliseconds
}
else if(milliseconds<100){
    ms="0"+milliseconds
}
else{
    ms=milliseconds
}

timedisplay.textContent=`${h} : ${m} : ${s} : ${ms}`

}


resetBtn.onclick=function(){
    resetBtn.classList.add("hide")
    lapBtn.classList.add("hide")
    clearInterval(uniqueid)
    playBtn.textContent="Play"
    milliseconds=0
    secs=0;
    mins=0;
    hr=0
    timedisplay.textContent="00 : 00 : 00 : 00"
    lapList.innerHTML = '';
    lapCounter = 1;
    clearall.classList.add("hide")

}
lapBtn.onclick = function () {
    clearall.classList.remove("hide")
         const lapTime = `${h}:${m}:${s}:${ms}`;
        const lapItem = document.createElement("li");
        lapItem.classList.add("rows");
        lapItem.innerHTML = `<span class="row-element">${lapCounter}</span><span class="row-element">${lapTime}</span>`;
        lapList.appendChild(lapItem);
        lapCounter++;
    
}
clearall.onclick=function(){
    lapList.textContent=""
    clearall.classList.add("hide")
}















