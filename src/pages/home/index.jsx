import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import styled from '@emotion/styled';

import { ArrowButton } from '../../components/buttons';
import { Table, BlockSearcher, CustomInput } from '../../components';
import { BlockState } from '../../context';
import { Pagination } from '../../components/pagination';
import { hexUtils, isNumber } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HashWrapper = styled.div`
  display: inline-flex;
  gap: 2.7em;
  margin: 1em 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const MAX_PAGE_ITEMS = 20;

const Home = () => {
  const { BlockContext } = BlockState;
  const { getBlock, ...rest } = useContext(BlockContext);
  const { isError, isLoading, ...state } = rest;
  const { transactions, hash, number } = state;

  if (isError) return null;

  const [counter, setCount] = useState(0);
  const [pageData, setPageData] = useState([]);

  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    getBlock('latest');
  }, []);

  useEffect(() => {
    let hexed = hexUtils.hexToDec(number);
    setInputValue(hexed);
  }, [number]);

  useEffect(() => {
    setPageData(transactions.slice(MAX_PAGE_ITEMS * counter, MAX_PAGE_ITEMS * (counter + 1)));
  }, [counter, transactions]);

  const onValidate = value => {
    if (isNumber(value)) {
      setInputValue(value);
      getBlock(value);
    }
  };

  return isLoading && inputValue ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <Wrapper>
      <BlockSearcher blockNumber={inputValue} onSearch={onValidate} onChange={setInputValue} />
      <HashWrapper>
        <span>{'Hash'}</span>
        <span>{hash}</span>
      </HashWrapper>
      {pageData.length && <Table transactions={pageData} />}
      <Pagination
        count={counter}
        pageSize={transactions.length ? parseInt(transactions.length / MAX_PAGE_ITEMS) : 0}
        setCount={setCount}
      />
    </Wrapper>
  );
};

export default Home;
