import React from 'react';

const rotationByDirection = {
  right: 0,
  top: -90,
  left: -180,
  bottom: 90,
};

export const ShortArrow = ({ direction = 'right', ...props }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      style={{
        transformOrigin: 'center',
        transform: `rotate(${rotationByDirection[direction]}deg)`,
      }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    />
  </svg>
);
