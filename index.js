document.addEventListener("DOMContentLoaded", function () {
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");
  const startBtn = document.getElementById("startBtn");
  const timerDisplay = document.getElementById("timer");
  let timer;

  startBtn.addEventListener("click", function () {
    clearInterval(timer);

    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;

    if (
      minutes < 0 ||
      seconds < 0 ||
      seconds > 59 ||
      (minutes === 0 && seconds === 0)
    ) {
      alert("Please enter valid time values.");
      return;
    }

    const totalTimeInSeconds = minutes * 60 + seconds;
    startTimer(totalTimeInSeconds);
  });

  function startTimer(totalTimeInSeconds) {
    let remainingTime = totalTimeInSeconds;

    timer = setInterval(function () {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

      timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(
        seconds
      )}`;

      if (remainingTime === 0) {
        clearInterval(timer);
        alert("Timer completed!");
      } else {
        remainingTime--;
      }
    }, 1000);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
});
