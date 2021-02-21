import React from 'react';
import styled from '@emotion/styled';

const ErrorBlock = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorInfo = ({ text }) => <ErrorBlock>{text}</ErrorBlock>;
