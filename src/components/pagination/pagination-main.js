import React from 'react';
import { PageList } from './page-list';
import { jc } from '../../utils';
import './pagination.scss';

export const PaginationMain = ({ pageSize, curPage, count, style = {}, disabled = false, setCount }) => {
  const isDisabled = name => (disabled ? name : '');

  const getCustomStyles = () => {
    const styles = {
      ['--button-cursor']: curPage?.number === 1 || curPage?.number === count ? 'not-allowed' : 'pointer',
      ...style,
    };
    return styles;
  };

  return (
    <div className={jc('pagination_main', isDisabled('main_disabled'))} style={getCustomStyles()}>
      <PageList pageSize={pageSize} curPage={curPage} count={count} setCount={setCount} />
    </div>
  );
};
