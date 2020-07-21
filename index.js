const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI
circle.setAttribute("stroke-dasharray", perimeter);
let durationTime;

var timer = new Timer(duration, start, pause, {
    onStart(totalDuration) {
        durationTime = totalDuration;
        console.log("timer Started");
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset", perimeter * (timeRemaining / durationTime) - perimeter);
        console.log("Tick Tick");
    },
    onComplete() {
        console.log("Timer is completed");
    }
});
