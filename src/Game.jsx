let buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

let userClickedPattern = [];

let gameStart = false

let level = 0

//Restarts game if wrong answer
function startOver() {

    level = 0;
    gamePattern = [];
    gameStart = false

}

//Starting the game
$(document).keydown(function() {

    if(!gameStart){

        $('#level-title').text("Level " + level);
        nextSequence();
        gameStart = true

    }


});


//Click functionality
$(".btn").click(function(){

    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

});

//Checks if the answer was correct
function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log('sucess')


    if(userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
            nextSequence();
          }, 1000);

    }

    } else {

        console.log('wrong');
        playSound('wrong')
        $("body").addClass("game-over");
        setTimeout(function () {
  
        $("body").removeClass("game-over");
  
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        return startOver();


    }

}

//Game sequence
function nextSequence(){

    userClickedPattern = [];
    level++;
    $('#level-title').text("Level " + level);
    let randomNum = Math.floor(Math.random() * 4);    
    let randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}

//Sound functionality
function playSound(name){

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

//Button animation
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
      setTimeout(function () {

      $("#" + currentColor).removeClass("pressed");

    }, 100);

}

export const Game = () => {
    return(
        <h1 id="level-title">Press A Key to Start</h1>
  <div className="container">
    <div className="row">
      <div type="button" id="green" className="btn green">
      </div>
      <div type="button" id="red" className="btn red">
      </div>
    </div>
    <div className="row">
      <div type="button" id="yellow" className="btn yellow">
      </div>
      <div type="button" id="blue" className="btn blue">
      </div>
    </div>
  </div>
    )
}












