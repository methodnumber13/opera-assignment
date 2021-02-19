import styled from '@emotion/styled';
import React from 'react';

const ThContainer = styled.th`
  padding: 18px 28px 18px;
  text-align: center;
  ${'' /* background: -webkit-gradient(linear, 0% 0%, 0% 25%, from(#f9f9f9), to(#fefefe)); */}
`;

const HeaderCell = ({ children }) => <ThContainer>{children}</ThContainer>;

const headerTitles = ['From', 'To', 'Hash'];

export const THead = () => (
  <thead>
    <tr>
      {headerTitles.map(title => (
        <HeaderCell key={`title-${title}`}>{title}</HeaderCell>
      ))}
    </tr>
  </thead>
);
