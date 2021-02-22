import React from 'react';
import { Button } from '../buttons';
import { PageListWrapper } from './pages-list-wrapper';
import { css, cx } from '@emotion/css';

const paginationBtn = css`
  cursor: pointer;
  color: black;
  border-radius: 0.4em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  text-decoration: none;
  &:hover {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
`;

const sizeS = css`
  height: 2em;
  width: 2em;
`;

const pageActiveBtn = css`
  border: 2px solid rgba(12, 10, 10, 0.658);
`;

export const PageList = function ({ pageSize, count, setCount }) {
  if (!pageSize) return null;
  const onClickHandler = i => setCount(i);

  const setActive = i => (count === i ? pageActiveBtn : '');

  return (
    <PageListWrapper pageSize={pageSize} count={count} setCount={setCount}>
      {new Array(pageSize - 1).fill(pageSize).map((page, i) => (
        <Button
          key={`page${i}`}
          onClick={() => onClickHandler(i)}
          className={cx(paginationBtn, sizeS, setActive(i))}>
          {i + 1}
        </Button>
      ))}
    </PageListWrapper>
  );
};
