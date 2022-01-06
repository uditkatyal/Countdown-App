const daysLeft = document.getElementById("days-left");
const hoursLeft = document.getElementById("hours-left");
const minutesLeft = document.getElementById("minutes-left");
const secondsLeft = document.getElementById("seconds-left");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  //   console.log(newYearDate - currentDate);

  const totalSeconds = (newYearDate - currentDate) / 1000;

  //   const weeks = Math.floor(totalSeconds / 3600 / 24 / 7);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysLeft.innerHTML = formatTime(days);
  hoursLeft.innerHTML = formatTime(hours);
  minutesLeft.innerHTML = formatTime(minutes);
  secondsLeft.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
