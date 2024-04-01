import React, { FC } from 'react';

import { cnCockroachImage } from './CockroachImage.classname';

import './CockroachImage.css';

type CockroachImageProps = {
  imageUrl: string;
  position: { top: string; left: string };
  onClick: () => void;
};

const CockroachImage: FC<CockroachImageProps> = ({ imageUrl, position, onClick }) => {
  return (
    <img
      className={cnCockroachImage()}
      alt="cockroach"
      src={imageUrl}
      style={position}
      onClick={onClick}
    ></img>
  );
};

export { CockroachImage };
