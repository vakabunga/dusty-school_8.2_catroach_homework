import React, { useState } from 'react';

import { Button } from './components/Button/Button';
import { GameBoard } from './components/GameBoard/GameBoard';
import type { cockroachesType } from './components/GameBoard/GameBoard';

import './App.css';

const App = () => {
  const [cocroachesList, setCockroachesList] = useState<cockroachesType>([]);

  const handleGetCurrentCockroachesList = (currentCocroachesList: cockroachesType) => {
    setCockroachesList(currentCocroachesList);
  };

  return (
    <div className="App">
      <GameBoard cockroachesList={cocroachesList} onChange={handleGetCurrentCockroachesList} />
      {cocroachesList.length === 0 && <Button onChange={handleGetCurrentCockroachesList} />}
    </div>
  );
};

export { App };
