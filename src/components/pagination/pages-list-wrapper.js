import React from 'react';
import { ArrowButton } from '../buttons/arrow';
import { PagesWrapper } from './pages-wrapper';
import './pagination.scss';

export const PageListWrapper = ({ pageSize, children, count, setCount }) => {
  const onClickHandler = i => setCount(i);

  return (
    <PagesWrapper>
      <ArrowButton
        className="arrow_btn"
        onClick={() => onClickHandler(count > 0 ? count - 1 : 0)}
        iconSize={'m'}
        direction="left"
      />
      {children}
      <ArrowButton
        className="arrow_btn"
        onClick={() => onClickHandler(count < pageSize - 2 ? count + 1 : pageSize - 2)}
        iconSize={'m'}
        direction="right"
      />
    </PagesWrapper>
  );
};
