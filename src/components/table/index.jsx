import React, { useState, useEffect } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

import { THead } from './head';
import { TBody } from './body';
import { Pagination } from '../pagination';

const MAX_PAGE_ITEMS = 20;

export const Table = ({ transactions }) => {
  const [counter, setCount] = useState(0);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setPageData(transactions.slice(MAX_PAGE_ITEMS * counter, MAX_PAGE_ITEMS * (counter + 1)));
  }, [counter, transactions]);

  if (!pageData.length) return null;

  return (
    <>
      <BootstrapTable striped bordered hover variant="dark" size="sm">
        <THead />
        <TBody transactions={pageData} />
      </BootstrapTable>
      <Pagination
        count={counter}
        pageSize={transactions.length ? parseInt(transactions.length / MAX_PAGE_ITEMS) : 0}
        setCount={setCount}
      />
    </>
  );
};
