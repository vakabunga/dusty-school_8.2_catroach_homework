import React, { FC, useState } from 'react';

import { cnGameBoard } from './GameBoard.classname';

import Cocroach_theme_1 from '../../img/cocroach_v1.png';
import Cocroach_theme_2 from '../../img/cocroach_v2.png';
import Cocroach_theme_3 from '../../img/cocroach_v3.png';
import { CockroachImage } from '../CockroachImage/CockroachImage';

import './GameBoard.css';

const COCKROACH_NUMBER = 10;

type GameBoardProps = {
  gameStatus: boolean;
  onGameStart: (value: boolean) => void;
};

type cockroachesType = {
  id: number;
  imageUrl: string;
  position: {
    top: string;
    left: string;
  };
}[];

const cockroachImages = [Cocroach_theme_1, Cocroach_theme_2, Cocroach_theme_3];

const getCockroachesList = () => {
  const cockroaches: cockroachesType = [];

  for (let i = 0; i < COCKROACH_NUMBER; i += 1) {
    cockroaches.push({
      id: i,
      imageUrl: cockroachImages[Math.floor(Math.random() * cockroachImages.length)],
      position: {
        top: Math.floor(Math.random() * 455) + 'px',
        left: Math.floor(Math.random() * 470) + 'px',
      },
    });
  };
  return cockroaches;
};

const GameBoard: FC<GameBoardProps> = ({ gameStatus, onGameStart }) => {
  const [cockroachesLeft, setCockroachesLeft] = useState<cockroachesType>(getCockroachesList());

  if ([...cockroachesLeft].length === 0 && gameStatus) {
    setCockroachesLeft(getCockroachesList());
    onGameStart(false);
  }

  const handleGetKillCockroach = (index: number) => {
    return () => {
      setCockroachesLeft((prev) => prev.filter((element) => element.id !== index));
    };
  };

  return (
    <div className={cnGameBoard()}>
      {gameStatus &&
        cockroachesLeft.map((element) => (
          <CockroachImage
            key={element.id}
            imageUrl={element.imageUrl}
            position={{ top: element.position.top, left: element.position.left }}
            onClick={handleGetKillCockroach(element.id)}
          />
        ))}
    </div>
  );
};

export { GameBoard };
