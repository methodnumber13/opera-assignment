import React, { useEffect, useState, useContext, memo } from 'react';
import styled from '@emotion/styled';

import { Table, BlockSearcher, Spinner } from '../../components';
import { ErrorInfo } from './error-info';
import { BlockState } from '../../context';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  height: inherit;
`;
const InfoWrapper = styled.div`
  display: inline-flex;
  gap: 3.5em;
  margin: 1em 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const InfoBlock = ({ hash, transactions, number }) => {
  return (
    <>
      {hash && (
        <InfoWrapper>
          <span>{'Hash'}</span>
          <span>{hash}</span>
        </InfoWrapper>
      )}
      {number && (
        <InfoWrapper style={{ gap: '1.9em' }}>
          <span>{'Number'}</span>
          <span>{number}</span>
        </InfoWrapper>
      )}
      <Table transactions={transactions} />
    </>
  );
};

export const Info = () => {
  const { BlockContext } = BlockState;
  const { transactions, hash, number, isLoading } = useContext(BlockContext);
  const [isNoData, setIsNoData] = useState(false);
  const [isErrorMsg, setErrorMsg] = useState(false);

  const renderInfo = () => {
    if (isLoading) return <Spinner />;
    if (isNoData) return <ErrorInfo text="no data" />;
    return <InfoBlock hash={hash} transactions={transactions} number={number} />;
  };

  return (
    <Wrapper isLoading={isLoading}>
      <BlockSearcher />
      {renderInfo()}
    </Wrapper>
  );
};
