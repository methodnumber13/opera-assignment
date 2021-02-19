import React, { useReducer } from 'react';
import { initialState, ModalContext } from './context';
import reducer from './reducer';
import { SET_MODAL } from './types';

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setModal = async payload => {
    dispatch({ type: SET_MODAL, payload });
  };

  return <ModalContext.Provider value={{ ...state, setModal }}>{children}</ModalContext.Provider>;
};
export { ModalProvider, ModalContext };
