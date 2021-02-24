import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';

import { ArrowButton } from '../components/buttons';
import { CustomInput } from '../components/input';
import { WithError } from './with-error';
import { BlockState } from '../context';
import { isNumber } from '../utils';

export const SearcherWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-top: 1em;
`;

const ONLY_NUMBERS = 'only numbers are allowed';

export const BlockSearcher = () => {
  const { BlockContext } = BlockState;
  const { getBlock } = useContext(BlockContext);

  const [inputValue, setInputValue] = useState('');
  const [isErrorMsg, setErrorMsg] = useState({ isVisible: false, message: '' });

  const handleChange = e => {
    let num = +e.target.value;

    if (isNumber(num)) {
      setInputValue(num);
    } else {
      setErrorMsg({ isVisible: true, message: ONLY_NUMBERS });
    }
  };

  const onSearch = value => {
    if (isNumber(+value)) {
      setInputValue(+value);
      getBlock(+value);
    }
  };

  return (
    <WithError {...isErrorMsg} type="error">
      <SearcherWrapper>
        <CustomInput
          key="custom-input"
          type="text"
          labelText="Block"
          name="blockNumber"
          placeholder="tap number"
          value={inputValue}
          onChange={handleChange}
          searchText={'find'}
          onSearch={onSearch}
        />
        <ArrowButton onClick={() => onSearch(inputValue - 1)} iconSize={'m'} direction="left" />
        <ArrowButton onClick={() => onSearch(inputValue + 1)} iconSize={'m'} direction="right" />
      </SearcherWrapper>
    </WithError>
  );
};
