import React from 'react';
import { ArrowButton } from '../buttons/arrow';
import { PagesWrapper } from './pages-wrapper';
import { css, cx } from '@emotion/css';

const arrowBtn = css`
  border-radius: 0.4em;
  &:hover {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
`;

export const PageListWrapper = ({ pageSize, children, count, setCount }) => {
  const onClickHandler = i => setCount(i);

  return (
    <PagesWrapper>
      <ArrowButton
        className={arrowBtn}
        onClick={() => onClickHandler(count > 0 ? count - 1 : 0)}
        iconSize={'m'}
        direction="left"
      />
      {children}
      <ArrowButton
        className={arrowBtn}
        onClick={() => onClickHandler(count < pageSize - 2 ? count + 1 : pageSize - 2)}
        iconSize={'m'}
        direction="right"
      />
    </PagesWrapper>
  );
};
