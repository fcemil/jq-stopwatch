(function ($) {
    $.fn.stopWatchContainer = (function () {

        this.each(function () {
            let clock = $('<div>00:00:00</div>');
            let startButton = $('<button>Start</button>');
            let pauseButton = $('<button>Pause</button>');
            let resetButton = $('<button>Reset</button>');



            class StopWatch {
                constructor() {
                    this.state = new StopWatchInitialState(this);
                    this.clock = clock;
                    this.rButton = resetButton;
                    this.sButton = startButton;
                }
                start() {
                    this.state.start();
                }
                stop() {
                    this.state.stop();
                }
                reset() {
                    this.state.reset();
                }
                changeState(nextState) {
                    this.state = nextState;
                }

            }
          
            class StopWatchRunningState  {
                constructor(stopWatch) {
                    this.stopWatch = stopWatch;
                }
                stop = function stop() {
                    window.clearInterval(interval);
                    this.stopWatch.changeState(new StopWatchStoppedState(this.stopWatch));
                }
                reset = function reset() {
                    window.clearInterval(interval);
                    sec = min = hour = 0;
                    shownSec = shownMin = shownHour = '00';
                    clock.text ('00:00:00');
                    this.stopWatch.changeState(new StopWatchInitialState(this.stopWatch));
                }
            }
            class StopWatchStoppedState {
                constructor(stopWatch) {
                    this.stopWatch = stopWatch;
                }
                start = function start() {
                    interval = window.setInterval(counter, 1000);
                    this.stopWatch.changeState(new StopWatchRunningState(this.stopWatch));
                }
                reset = function reset() {
                    window.clearInterval(interval);
                    sec = min = hour = 0;
                    shownSec = shownMin = shownHour = '00';
                    clock.text('00:00:00');
                    this.stopWatch.changeState(new StopWatchInitialState(this.stopWatch));
                }
            }
            class StopWatchInitialState  {
                constructor(stopWatch) {
                    this.stopWatch = stopWatch;
                }
                start = function start() {
                    //start function
                    interval = window.setInterval(counter, 1000);
                    this.stopWatch.changeState(new StopWatchRunningState(this.stopWatch));
                }
            }
            let sec = 0;
            let min = 0;
            let hour = 0;

            let shownSec = 0;
            let shownMin = 0;
            let shownHour = 0;

            let interval = null;
            function counter() {
                sec++;
                if (sec === 60) {
                    sec = 0;
                    min++;
                    if (min === 60) {
                        min = 0;
                        hour++;
                    }
                }
                sec < 10 ? shownSec = '0' + sec : shownSec = sec;
                min < 10 ? shownMin = '0' + min : shownMin = min;
                sec < 10 ? shownHour = '0' + hour : shownHour = hour;

                clock.html(shownHour + ':' + shownMin + ':' + shownSec);

            }

            var st = new StopWatch();

            startButton.click(function (e) { 
                e.preventDefault();
                st.state.start();
                
            });
            pauseButton.click(function (e) { 
                e.preventDefault();
                st.state.stop();
                
            });
            resetButton.click(function (e) { 
                e.preventDefault();
                st.state.reset();    
            });

            elementBuilder(this,clock, startButton, pauseButton,resetButton);


        })




        return this;



    })
})(jQuery);
function elementBuilder(obj, clock, startButton, pauseButton, resetButton) {
    var outerDiv = $('<div class= "box"></div>');
    var innerDiv = $('<div class= "box"></div>');

    let clockStyle = {
        "font-size": "72px",
        "align-self": "center",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "height": "200px"
    }
    clock.css(clockStyle);
    outerDiv.append(clock);
    var buttons = $('<div></div>');
    let buttonsStyle = {
        "width": "100%",
        "text-align": "center",
        "vertical-align": "middle",
        "align-self": "middle",
        "padding": "middle",
        "margin": "auto"
    };
    buttons.css(buttonsStyle)


    let buttonCss = {
        "text-align": "center",
        "box-sizing": "border-box",
        "padding": "10px",
        "font-size": "10px",
        "width": "30%",
        "border-radius": "25px"
    }
    startButton.css(buttonCss);
    pauseButton.css(buttonCss);
    resetButton.css(buttonCss);
    buttons.append(startButton); buttons.append(pauseButton); buttons.append(resetButton);
    innerDiv.append(buttons);
    outerDiv.append(innerDiv);
    console.log(outerDiv.html())
    outerDiv.appendTo(obj);
    console.log(obj)
}

