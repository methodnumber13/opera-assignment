import React from 'react';
import styled from '@emotion/styled';

const WithErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.span`
  color: ${({ type }) => (type === 'warning' ? '#d1ab0b' : '#e01414')};
  font-size: 1.1rem;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;

export const WithError = ({ children, message = '', isVisible = false, type = 'warning' }) => {
  return (
    <WithErrorWrapper>
      {children}
      <ErrorText isVisible={isVisible} type={type}>
        {message}
      </ErrorText>
    </WithErrorWrapper>
  );
};
