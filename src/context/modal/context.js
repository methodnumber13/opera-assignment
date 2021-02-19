import { createContext } from 'react';

export const initialState = {
  show: false,
  title: '',
  body: () => {},
  setModal: props => {},
};

export const ModalContext = createContext(initialState);
