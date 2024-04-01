import React, { useState } from 'react';

import { Button } from './components/Button/Button';
import { GameBoard } from './components/GameBoard/GameBoard';

import './App.css';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);

  const getGameStatus = (value: boolean) => {
    setGameStatus(value);
  };

  return (
    <div className="App">
      <GameBoard gameStatus={gameStatus} onGameStart={getGameStatus}/>
      {!gameStatus && <Button onGameStart={getGameStatus} />}
    </div>
  );
};

export { App };
