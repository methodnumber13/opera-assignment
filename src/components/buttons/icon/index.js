import React from 'react';
import { Button } from '../default';
import { Icon } from '../../icon';

export const IconButton = props => {
  const { iconSize, style, className, children, buttonSize, ...rest } = props;
  return (
    <Button className={className} style={style} size={buttonSize} {...rest}>
      <Icon iconSize={iconSize}>{children}</Icon>
    </Button>
  );
};
