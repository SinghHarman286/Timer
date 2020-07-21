class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        
        // checking if the callbacks function was provided
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        // adding Event Listeners
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    };

    // Start the timer
    start = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.id = setInterval(this.tick, 10);
    }

    // Ticking
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
        
    }
    // Pause the timer
    pause = () => {
        clearInterval(this.id);
    }

    // getter

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    // setter

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
} 