Ext.define('TimerApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    timer: null,
    seconds: 0,
    countdown: false,  // New flag to determine countdown mode

    onStartCountdown: function() {
        // Get the countdown time directly from the timerDisplay field
        const timeInput = this.lookupReference('timerDisplay').getValue();
        const timeParts = timeInput.split(':');  // Split by colon

        // Parse minutes and seconds
        const minutes = parseInt(timeParts[0], 10) || 0;  // Default to 0 if NaN
        const seconds = parseInt(timeParts[1], 10) || 0;  // Default to 0 if NaN

        // Calculate total seconds
        this.seconds = (minutes * 60) + seconds;

        if (this.seconds > 0) {
            this.countdown = true;   // Enable countdown mode
            this.updateDisplay();    // Update display to show initial time

            // Start the timer if it's not already running
            if (!this.timer) {
                this.timer = setInterval(this.updateTimer.bind(this), 1000);
            }
        } else {
            Ext.Msg.alert('Invalid Input', 'Please enter a valid time in MM:SS format.');
        }
    },
    onStartTimer: function() {
        console.log('Start button clicked');
        if (!this.timer) {
            this.timer = setInterval(this.updateTimer.bind(this), 1000);
            this.countdown = false;
        }
    },


    onStopTimer: function() {
        clearInterval(this.timer);
        this.timer = null;
        this.countdown = false;
    },

    onResetTimer: function() {
        this.onStopTimer();
        this.seconds = 0;
        this.updateDisplay();
    },

    updateTimer: function() {
        if (this.countdown) {
            if (this.seconds > 0) {
                this.seconds--;  // Decrement seconds for countdown
            } else {
                this.onStopTimer();  // Stop the timer when it reaches zero
                Ext.Msg.alert('Time\'s Up!', 'Countdown complete.');
            }
        } else {
            this.seconds++;  // Normal increment if not in countdown mode
        }
        this.updateDisplay();
    },

    updateDisplay: function() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds % 60;
        const display = Ext.String.leftPad(minutes, 2, '0') + ':' + Ext.String.leftPad(seconds, 2, '0');

        const timerDisplay = this.lookupReference('timerDisplay');
        if (timerDisplay) {
            timerDisplay.setValue(display);  // Set the value for display
        }
    }
});



