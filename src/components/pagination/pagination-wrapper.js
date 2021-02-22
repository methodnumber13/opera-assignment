import React from 'react';
import { css, cx } from '@emotion/css';

const styles = css`
  --pagination-position: flex-end;
  display: flex;
  justify-content: var(--pagination-position);
  flex-direction: row;
`;

const disabledArrow = css`
  cursor: not-allowed;
`;

const isDisabled = disabled => (disabled ? disabledArrow : '');

export const PaginationWrapper = props => {
  const { children, disabled = false, style = {}, className = '' } = props;

  return (
    <div style={{ ...style }} className={cx(styles, isDisabled(disabled), className)}>
      {children}
    </div>
  );
};
