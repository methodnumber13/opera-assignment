import React from 'react';
import { PageList } from './page-list';
import { css, cx } from '@emotion/css';

const paginationMain = css`
  --button-cursor: pointer;
  margin: 1em 0 0 0;
  cursor: var(--button-cursor);
  display: flex;
  flex-direction: row;
`;

const mainDisabled = css`
  pointer-events: none;
  opacity: 0.4;
`;

export const PaginationMain = ({ pageSize, curPage, count, style = {}, disabled = false, setCount }) => {
  const isDisabled = name => (disabled ? name : '');

  const getCustomStyles = () => {
    debugger;
    const styles = {
      ['--button-cursor']: !count || curPage?.number === count ? 'not-allowed' : 'pointer',
      ...style,
    };
    return styles;
  };

  return (
    <div className={cx(paginationMain, isDisabled(mainDisabled))} style={getCustomStyles()}>
      <PageList pageSize={pageSize} count={count} setCount={setCount} />
    </div>
  );
};
