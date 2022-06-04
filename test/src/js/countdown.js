import { resetCounter, userIDs } from "./entry"
import { winner } from './winner'

export let gameStatus = true

export const changeGameStatus = () => {
    gameStatus = !gameStatus
}

const refreshCountDownTime = (time) => {
    return time + 5000
}

// Set the date we're counting down to
let countDownDate = refreshCountDownTime(new Date().getTime());

// Update the count down every 1 second
const countingDown = () => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "Time: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        $('#demo').text('Выбирается победитель')

        clearInterval(countingDownInterval)

        changeGameStatus()

        winner(userIDs, function () {
            countDownDate = refreshCountDownTime(new Date().getTime())
            countingDownInterval = setInterval(countingDown, 1000)
            resetCounter()
        });
    }
}

let countingDownInterval = setInterval(countingDown, 1000);
