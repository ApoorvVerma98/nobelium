import React, { useState } from 'react';
import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || winner) return;
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const lines = [      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) setWinner('Draw');
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const renderSquare = (index) => (
    <button className={styles.square} onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  let status;
  if (winner) {
    status = `${winner} wins!`;
  } else {
    status = `Next player: ${player}`;
  }

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className={styles.restart} onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
