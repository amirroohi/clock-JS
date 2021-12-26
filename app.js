const clock = document.querySelector("#MyClockDisplay");
// let time = new Date();
function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h == 0 || h < 12) {
    session = "AM";
  } else if (h == 12) {
    h = 12;
    session = "PM";
  } else if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

// showTime();
clock.addEventListener("load", showTime());

// analog clock
const hourHand = document.querySelector(".hours");
const minuteHand = document.querySelector(".minutes");
const secondHand = document.querySelector(".seconds");

function rotate(hand, degree) {
  hand.style.transform = `rotate(${degree + 90}deg)`;
}
function showRotationDegree() {
  let date = new Date();
  let seconds = date.getSeconds(); // 0 - 59
  let minutes = date.getMinutes(); // 0 - 59
  let hours = date.getHours(); // 0 - 23

  const secondRotateDegrees = (360 / 60) * seconds;
  const minuteRotateDegrees = (360 / 60) * minutes + (6 / 60) * seconds;
  const hourRotateDegrees = (360 / 12) * hours + (30 / 60) * minutes;

  rotate(secondHand, secondRotateDegrees);
  rotate(minuteHand, minuteRotateDegrees);
  rotate(hourHand, hourRotateDegrees);
}
setInterval(showRotationDegree, 1000);
showRotationDegree();
