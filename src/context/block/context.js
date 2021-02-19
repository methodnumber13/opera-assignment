import { createContext } from 'react';

export const initialState = {
  number: '',
  hash: '',
  transactions: [],
  isLoading: false,
  isError: false,
  getBlock: block => {},
};

export const BlockContext = createContext(initialState);
