import React from 'react';
import styled from '@emotion/styled';
import { Button } from './buttons';
const StyledInput = styled.input`
  font: inherit;
  color: currentColor;
  width: 15em;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  height: 1.1876em;
  margin: 0;
  display: inline-flex;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: end;
`;

const StyledSearch = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  cursor: pointer;
`;

// стилизованный инпут и лейбл
export const CustomInput = props => {
  const { labelText, searchText, onSearch, ...inputProps } = props;
  return (
    <Wrapper>
      <StyledLabel>
        {labelText}
        <StyledInput {...inputProps} />
      </StyledLabel>
      <StyledSearch onClick={() => onSearch(inputProps.value)}>{searchText}</StyledSearch>
    </Wrapper>
  );
};
