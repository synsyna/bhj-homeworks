
const timerElement = document.getElementById("timer");
let currentTimerValue = parseInt(timerElement.textContent, 10);

const countdown = setInterval(() => {
    if (currentTimerValue > 0) {
        currentTimerValue--;
        timerElement.textContent = currentTimerValue;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval(countdown);
    } 
}, 1000);
