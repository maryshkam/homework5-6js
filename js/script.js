var start = document.querySelector('.start');
var clear = document.querySelector('.stop');
var timer = document.querySelector('.timer');
var milisec = document.querySelector('.mSec');

var condition = 0;
var time = 0;

function on() {
	if (condition == 0) {
		condition = 1;
		increase();
		start.innerHTML = 'Pause';
	} else {
		condition = 0;
		start.innerHTML = 'Ruseme';
	}
}

function off() {
	condition = 0;
	time = 0;
	start.innerHTML = 'Start';
	timer.innerHTML = '00:00:00';
	milisec.innerHTML = '00';
}

function increase() {
	if (condition == 1) {
		setTimeout(function() {
			time++;
			var hours = Math.floor(time/360000%24);
			var min = Math.floor(time/6000%60);
			var sec = Math.floor(time/100%60);
			var mSec = time % 100;

			
			if (hours < 10) {
				hours = "0" + hours;
			}
            
            if (min < 10) {
                min = "0" + min;
            }

            if (sec < 10) {
            	sec = "0" + sec;
            }
            if (sec >= 60) {
            	// if ((sec % 60) < 10) {
            	// 	sec = "0" + sec % 60;
            	// } else {
                sec = sec % 60;
            	// }
        	}
            if (mSec < 10) {
                mSec = "0" + mSec;
            }

            timer.innerHTML = hours + ':' + min + ':' + sec;
            milisec.innerHTML = mSec;
            increase();
		}, 10);

	}

}

start.addEventListener('click', on);
clear.addEventListener('click', off);

