import React, { useState } from 'react';
import styled from '@emotion/styled';

import { ArrowButton } from '../components/buttons';
import { CustomInput } from '../components/input';
import { WithError } from './with-error';
import { isNumber } from '../utils/index';

export const SearcherWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-top: 1em;
`;

export const BlockSearcher = ({ blockNumber, onSearch, onChange, isErrorMsg }) => {
  const handleChange = e => {
    let value = +e.target.value;
    if (isNumber(value)) onChange(value);
  };
  return (
    <WithError isVisible={isErrorMsg} message="the values are equal!">
      <SearcherWrapper>
        <CustomInput
          key="custom-input"
          type="text"
          labelText="Number"
          name="blockNumber"
          placeholder="tap number"
          value={blockNumber}
          onChange={handleChange}
          searchText={'find'}
          onSearch={onSearch}
        />
        <ArrowButton onClick={() => onSearch(blockNumber - 1)} iconSize={'m'} direction="left" />
        <ArrowButton onClick={() => onSearch(blockNumber + 1)} iconSize={'m'} direction="right" />
      </SearcherWrapper>
    </WithError>
  );
};
