import React from 'react';
import { jc } from '../../utils';
import './index.scss';

const isDisabled = disabled => (disabled ? `disabled` : '');

export const PaginationWrapper = props => {
  const { children, disabled = false, style = {}, className = '' } = props;

  return (
    <div style={{ ...style }} className={jc('pagination_wrapper', isDisabled(disabled), className)}>
      {children}
    </div>
  );
};
