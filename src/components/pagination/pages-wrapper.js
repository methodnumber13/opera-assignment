import React from 'react';
import styled from '@emotion/styled';
// import './index.scss';

const PagesWrapperView = styled.div`
  display: flex;
  flex-direction: row;
`;

// export { PaginationWrapper } from './pagination-wrapper';
// export { PageListWrapper } from './pages-list-wrapper';

export const PagesWrapper = ({ children }) => <PagesWrapperView>{children}</PagesWrapperView>;
