import React, { useEffect } from 'react';
import { PaginationWrapper } from './pagination-wrapper';
import { PaginationMain } from './pagination-main';

export const Pagination = props => {
  const { disabled } = props;
  return (
    <PaginationWrapper disabled={disabled}>
      <PaginationMain {...props} />
    </PaginationWrapper>
  );
};
