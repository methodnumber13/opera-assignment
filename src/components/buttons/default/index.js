import React from 'react';
import './button.scss';
import { jc } from '../../../utils';

export const Button = props => {
  const { children, disabled, style, className = '', size, ...rest } = props;
  const isDisabled = name => (disabled ? name : '');

  return (
    <button className={jc('default_btn', isDisabled('btn_disabled'), className)} {...rest}>
      {children}
    </button>
  );
};
