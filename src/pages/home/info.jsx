import React, { useEffect, useState, useContext, memo } from 'react';
import styled from '@emotion/styled';

import { Table, BlockSearcher } from '../../components';
import { ErrorInfo } from './error-info';
import { hexUtils, isNumber } from '../../utils';
import { BlockState } from '../../context';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`;
const HashWrapper = styled.div`
  display: inline-flex;
  gap: 2.7em;
  margin: 1em 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const InfoBlock = ({ hash, transactions }) => (
  <>
    <HashWrapper>
      <span>{'Hash'}</span>
      <span>{hash}</span>
    </HashWrapper>
    <Table transactions={transactions} />
  </>
);

export const Info = () => {
  const { BlockContext } = BlockState;
  const { getBlock, transactions, hash, number } = useContext(BlockContext);

  const [inputValue, setInputValue] = useState(0);
  const [isNoData, setIsNoData] = useState(false);
  const [isErrorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    let res = number;
    if (hexUtils.isHex(number)) res = hexUtils.hexToDec(number);
    else setIsNoData(!isNoData);

    setInputValue(res);
  }, [number]);

  const onValidate = value => {
    if (isNumber(value)) {
      if (hexUtils.hexToDec(number) !== value) {
        setInputValue(value);
        getBlock(value);
      } else setErrorMsg(true);
    }
  };

  return (
    inputValue && (
      <Wrapper>
        <BlockSearcher
          blockNumber={inputValue}
          isErrorMsg={isErrorMsg}
          onSearch={onValidate}
          onChange={setInputValue}
        />
        {!isNoData ? <InfoBlock hash={hash} transactions={transactions} /> : <ErrorInfo text="no data" />}
      </Wrapper>
    )
  );
};
