import * as React from 'react';
import styled from '@emotion/styled';

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #faf7f7;
`;

export const LayoutMain = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);
