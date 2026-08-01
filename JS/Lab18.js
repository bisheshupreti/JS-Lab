let today = new Date(); 
let formattedDate = today.toDateString();
document.getElementById("currentDate").innerHTML = formattedDate;

let formattedTime = today.toLocaleTimeString();
document.getElementById("currentTime").innerHTML = formattedTime;

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hh = hours.toString().padStart(2, "0");
  let mm = minutes.toString().padStart(2, "0");
  let ss = seconds.toString().padStart(2, "0");

  let timeString = hh + ":" + mm + ":" + ss;
  document.getElementById("liveClock").innerHTML = timeString;
}

setInterval(updateClock, 1000);

updateClock();
