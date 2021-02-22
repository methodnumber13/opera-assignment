import React from 'react';
import styled from '@emotion/styled';

const PagesWrapperView = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PagesWrapper = ({ children }) => <PagesWrapperView>{children}</PagesWrapperView>;
