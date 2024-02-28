function updateCountDown(){
const current = new Date;
const target = new Date("2024-04-29T16:00:00");
const difference = target - current;

const days = Math.floor(difference / (1000*60*60*24));
const hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((difference%(1000*60*60))/(1000*60));
const seconds = Math.floor((difference%(1000*60)) / 1000);

document.getElementById('days').innerText = days;
document.getElementById('hours').innerText = hours;
document.getElementById('minutes').innerText = minutes;
document.getElementById('seconds').innerText = seconds;

}

const interval = setInterval(updateCountDown, 1000);

if (difference < 0){
    clearInterval(interval);
    document.getElementById("timer").innerText = "Have a nice Holiday!"
}