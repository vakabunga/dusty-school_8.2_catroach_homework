import React, { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';
import { getCockroachesList } from '../GameBoard/GameBoard';
import type { cockroachesType } from '../GameBoard/GameBoard';

type ButtonProps = {
  onChange: (value: cockroachesType) => void;
};

const Button: FC<ButtonProps> = ({ onChange }) => {
  const handleStartGame = () => {
    onChange(getCockroachesList());
  };

  return (
    <button className={cnButton()} onClick={handleStartGame}>
      Начать игру
    </button>
  );
};

export { Button };
