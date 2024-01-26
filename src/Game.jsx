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

  //Click functionality

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
