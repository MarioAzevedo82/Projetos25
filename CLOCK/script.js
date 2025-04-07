const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date()

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
    
}

setInterval(() => {
    const {seconds} = getTime()

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds}deg)`;
}, 1000);