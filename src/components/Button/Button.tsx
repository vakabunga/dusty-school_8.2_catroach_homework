import React, { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

type ButtonProps = {
  onGameStart: (value: boolean) => void;
};

const Button: FC<ButtonProps> = ({ onGameStart }) => {
  const handleStartGame = () => {
    onGameStart(true);
  };

  return (
    <button className={cnButton()} onClick={handleStartGame} >
      Начать игру
    </button>
  );
};

export { Button };
