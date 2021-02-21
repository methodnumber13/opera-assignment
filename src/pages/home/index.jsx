import React, { useContext, useEffect } from 'react';
import { Spinner } from '../../components';

import { Info } from './info';
import { ErrorInfo } from './error-info';
import { BlockState } from '../../context';

const Home = () => {
  const { BlockContext } = BlockState;
  const { getBlock, isError, isLoading } = useContext(BlockContext);

  if (isError) return <ErrorInfo text="something went wrong..." />;

  useEffect(() => {
    getBlock('latest');
  }, []);

  return isLoading ? <Spinner /> : <Info />;
};

export default Home;
