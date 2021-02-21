import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { jc } from '../../utils';

const IconView = styled.span`
  --icon-size: 100%;
  --icon-color: currentColor;

  display: flex;
  width: var(--icon-size);
  height: var(--icon-size);

  font-size: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--icon-color);
  }
`;

const sizes = {
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
};

export const Icon = ({ children, className = '', iconSize, iconColor, style }) => {
  const styles = {
    ['--icon-size']: sizes[iconSize],
    ['--icon-color']: iconColor ?? 'currentColor',
    ...style,
  };

  return (
    <IconView className={className} role="presentation" style={styles}>
      {children}
    </IconView>
  );
};
