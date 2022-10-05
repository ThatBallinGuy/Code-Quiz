// variables to keep track of quiz state
    var currentQuestion = 0;
    var time = 60;
    var timerId = document.getElementById('timeText');
    

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');


/* FUNCTION TO START THE QUIZ */
function startQuiz(event) {
    event.stopPropagation();
    // hide start screen
    document.getElementById('start-screen').className ="hide";

    // un-hide questions section
    document.getElementById('questions').className ="show";
    // start timer
    clockTick();
    // show starting time

    //getQuestion();
}

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
    // get current question object from array

    // update title with current question

    // clear out ant old question choices

    // loop over choices
        // FOR {
            // create new button for each choice

            // display on the page
        
        // }
}

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {

    // if the clicked element is not a choice button, do nothing.
    if (something) {

    }

    // check if user guessed wrong
    if (something) {
        // penalize time

        // display new time on page

        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback, letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
        // if so, end the quiz
        // else, get the next question    
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
}

/* FUNCTION FOR UPDATING THE TIME */
function clockTick() {
    // update time
    var timer = setInterval(function() {
        time--;
        document.getElementById("timeText").textContent = "Time: " + time;
        /*if (time >= 0) {
          // Tests if win condition is met
          if (isWin && time > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            winGame();
          }
        }*/

        // Tests if time has run out
        if (time === 0) {
          // Clears interval
          clearInterval(timer);
          //loseGame();
        }
      }, 1000);

    // check if user ran out of time
}

function saveHighscore() {
    // get value of input box - for initials

    // make sure value wasn't empty
        // get saved scores from localstorage, or if not any, set to empty array

        // format new score object for current user

        // save to local storage

        // redirect to next page
}

/* CLICK EVENTS */
    // user clicks button to submit initials

    // user clicks button to start quiz
    document.querySelector("#start-quiz").addEventListener("click", startQuiz);

    // user clicks on element containing choices