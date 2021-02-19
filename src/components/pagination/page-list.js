import React from 'react';
import { Button } from '../buttons';
import { jc } from '../../utils';
import { PageListWrapper } from './pages-list-wrapper';
import './pagination.scss';

export const PageList = function ({ pageSize, count, setCount }) {
  if (!pageSize) return null;
  const onClickHandler = i => setCount(i);

  const setActive = i => (count === i ? `page_active_btn` : '');

  return (
    <PageListWrapper pageSize={pageSize} count={count} setCount={setCount}>
      {new Array(pageSize - 1).fill(pageSize).map((page, i) => (
        <Button
          key={`page${i}`}
          onClick={() => onClickHandler(i)}
          className={jc('pagination_btn', 'pagination_size_s', setActive(i))}>
          {i + 1}
        </Button>
      ))}
    </PageListWrapper>
  );
};
