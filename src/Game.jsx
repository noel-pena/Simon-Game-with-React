var buttonColors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

var userClickedPattern = [];

var gameStart = false

var level = 0

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

    var userChosenColor = $(this).attr("id");
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
    var randomNum = Math.floor(Math.random() * 4);    
    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}

//Sound functionality
function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
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
  <div class="container">
    <div lass="row">
      <div type="button" id="green" class="btn green">
      </div>
      <div type="button" id="red" class="btn red">
      </div>
    </div>
    <div class="row">
      <div type="button" id="yellow" class="btn yellow">
      </div>
      <div type="button" id="blue" class="btn blue">
      </div>
    </div>
  </div>
    )
}












