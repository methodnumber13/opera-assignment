import React from 'react';
import { css, cx } from '@emotion/css';

const defaultBtn = css`
  cursor: pointer;
  outline: none;
`;
const btnDisabled = css`
  pointer-events: none;
  opacity: 0.2;
`;

export const Button = props => {
  const { children, disabled, style, className = '', size, ...rest } = props;
  const isDisabled = name => (disabled ? name : '');

  return (
    <button className={cx(defaultBtn, isDisabled(btnDisabled), className)} {...rest}>
      {children}
    </button>
  );
};
