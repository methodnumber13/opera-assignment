import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

import { heights, dimensions, colors } from '../styles/variables';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  background-color: ${colors.gray.dark};
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 22em;
`;

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <HeaderInner>{title}</HeaderInner>
    </StyledHeader>
  );
};
