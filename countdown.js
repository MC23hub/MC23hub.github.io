const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("March 20 2026 18:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds

    if (Math.floor(distance / 1000) <= 0) {
        document.getElementById("time-days").style.display = "none"; 
        document.getElementById("time-hours").style.display = "none"; 
        document.getElementById("time-minutes").style.display = "none"; 
        document.getElementById("time-seconds").style.display = "none"; 

        document.getElementById("release-date").innerHTML = "Testa att reloada hemsidan om några minuter";

        document.getElementById("update-now").style.display = "flex"; 
    }
}

setInterval(timer, 1000);

