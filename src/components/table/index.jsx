import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

import { THead } from './head';
import { TBody } from './body';

export const Table = ({ transactions }) => {
  return (
    <BootstrapTable striped bordered hover variant="dark" size="sm">
      <THead />
      <TBody transactions={transactions} />
    </BootstrapTable>
  );
};
