import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      {routes.map(({ exact, path, component: Component }) => (
        <Route key={path} exact={exact} path={path} render={props => <Component {...props} />} />
      ))}
    </Switch>
  </Suspense>
);
