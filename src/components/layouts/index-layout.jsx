import * as React from 'react';
import Helmet from 'react-helmet';
import 'modern-normalize';

import { Header } from '../../components/head';
import { LayoutRoot } from './root';
import { LayoutMain } from './main';
import '../../styles/normalize';

export const IndexLayout = ({ children }) => {
  return (
    <LayoutRoot>
      <Helmet
        title={'opera assigment'}
        meta={[
          { name: 'description', content: `It's an assigment` },
          { name: 'keywords', content: 'opera' },
        ]}
      />
      <Header title={'Eth Block scanner'} />
      <LayoutMain>{children}</LayoutMain>
    </LayoutRoot>
  );
};
