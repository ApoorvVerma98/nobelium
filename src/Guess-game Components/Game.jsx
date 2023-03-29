import React, { useState } from "react";
import styles from "./Game.module.css";

const Game = () => {
  const [luckyNumber, setLuckyNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const numberGuess = parseInt(guess);
    if (numberGuess === luckyNumber) {
      setMessage(
        `Congratulations! You guessed the right number in ${count} attempts.`
      );
      setLuckyNumber(Math.floor(Math.random() * 10) + 1);
      setGuess("");
      setCount(0);
    } else if (numberGuess < luckyNumber) {
      setMessage(`You guessed a smaller number.`);
      setGuess("");
      setCount(count + 1);
    } else {
      setMessage(`You guessed a bigger number.`);
      setGuess("");
      setCount(count + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Guess the Lucky Number!</h1>
        <p>Guess a number between 1 and 10:</p>
        <form onSubmit={handleGuessSubmit}>
          <input type="number" value={guess} onChange={handleGuessChange} />
          <button type="submit">Guess</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Game;

