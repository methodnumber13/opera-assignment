import React, { memo, StrictMode } from 'react';
import { Routes } from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlockState, ModalState } from './context';
import { IndexLayout, Modal } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = memo(() => {
  const { BlockProvider } = BlockState;
  const { ModalProvider } = ModalState;
  return (
    <IndexLayout>
      <ModalProvider>
        <BlockProvider>
          <Modal />
          <Router>
            <Routes />
          </Router>
        </BlockProvider>
      </ModalProvider>
    </IndexLayout>
  );
});
