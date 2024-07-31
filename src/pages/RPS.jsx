import React, { useState } from "react";
import "../assets/css/rps.css";
import rock_image from "../assets/images/rock.jpg";
import papper_image from "../assets/images/paper.jpg";
import scissors_image from "../assets/images/scissors.jpg";
import Nav from "./utility/Nav";
export default function RPS() {
  //js code
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  let [playerCount, setPlayerCount] = useState(0);
  let [computerCount, setComputerCount] = useState(0);
  function play(option) {
    //set the player choice to the users option
    setPlayerChoice(option);

    //get computer schoice
    const computerChoices = ["rock", "papper", "scissors"];
    const computerRandom = Math.floor(Math.random() * computerChoices.length);
    const _computerChoice = computerChoices[computerRandom];
    setComputerChoice(_computerChoice);

    const _result = result(option, _computerChoice);
    won(_result);
  }

  function result(player, computer) {
    console.log({ player, computer });
    if (player == computer) {
      return "draw";
    } else if (
      (player == "rock" && computer == "scissors") ||
      (player == "papper" && computer == "rock") ||
      (player == "scissors" && computer == "papper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

  function won(outcome) {
    switch (outcome) {
      case "player":
        //player won
        setWinner("Player Won");
        setPlayerCount(++playerCount);
        break;
      case "computer":
        //computer won
        setWinner("Computer Won");
        setComputerCount(++computerCount);
        break;
      default:
        setWinner("It a Tie");
      //draw
    }
  }
  return (
    <div className="rps">
      <Nav />
      <div className="container_images">
        <div>
          <img src={rock_image} alt="" onClick={() => play("rock")} />
          <h5>Rock</h5>
        </div>
        <div>
          <img src={papper_image} alt="" onClick={() => play("papper")} />
          <h5>Paper</h5>
        </div>
        <div>
          <img src={scissors_image} alt="" onClick={() => play("scissors")} />
          <h5>Scissors</h5>
        </div>
      </div>
      <div className="result">
        <div>
          <h3>Player Choice</h3>
          {playerChoice == "" ? (
            ""
          ) : (
            <p>Player Choice {playerChoice.toUpperCase()}</p>
          )}
        </div>
        <div>
          <h3>Winner</h3>
          <p>{winner}</p>
        </div>
        <div>
          <h3>Computer Choice</h3>
          {computerChoice == "" ? (
            ""
          ) : (
            <p>Computer Choice {computerChoice.toUpperCase()}</p>
          )}
        </div>
      </div>
      <div className="counter">
        <div>
          <h3>Player Count</h3>
          <p>{playerCount}</p>
        </div>
        <div>
          <h3>Computer Count</h3>
          <p>{computerCount}</p>
        </div>
      </div>
    </div>
  );
}
