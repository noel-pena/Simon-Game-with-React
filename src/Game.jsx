import React, { useState } from "react";

export const Game = () => {
  let buttonColors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
  let userClickedPattern = [];
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState("Press A Key to Start");

  //Restarts game
  function startOver() {
    setLevel("0");
    gamePattern = [];
    setGameStarted(false);
  }

  //Starting game
  function startGame(event) {
    if (!gameStarted) {
      setLevel("Level " + level);
      //   nextSequence();
      setGameStarted(true);
    }
  }

  //Game sequence
  function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playSound(randomChosenColor);
  }

  //Click functionality
  $(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });

  //Sound functionality
  function playSound(name) {
    let audio = new Audio("public/sounds/" + name + ".mp3");
    audio.play();
  }

  //Button animation
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  return (
    <React.Fragment>
      <h1 onKeyDown={startGame} id="level-title">
        {level}
      </h1>
      <div className="container">
        <div className="row">
          <div type="button" id="green" className="btn green"></div>
          <div type="button" id="red" className="btn red"></div>
        </div>
        <div className="row">
          <div type="button" id="yellow" className="btn yellow"></div>
          <div type="button" id="blue" className="btn blue"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
