import React from 'react';
import { IconButton } from '../icon';
import { ShortArrow } from '../../svg/short-arrow';
import { jc } from '../../../utils';
import './arrowButton.scss';

export const ArrowButton = props => {
  const { iconSize, buttonSize, direction, style, className = '', ...rest } = props;
  return (
    <IconButton
      buttonSize={buttonSize}
      iconSize={iconSize}
      style={style}
      className={jc('shortArrow_btn', className)}
      {...rest}>
      <ShortArrow direction={direction} />
    </IconButton>
  );
};
