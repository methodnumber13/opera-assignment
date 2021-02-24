import React, { useReducer } from 'react';
import { initialState, BlockContext } from './context';
import reducer from './reducer';
import { BLOCK_PENDING, BLOCK_ERROR, BLOCK_SUCCESS } from './types';

const API_URL = process.env.API_URL;

const BlockProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlock = async block => {
    dispatch({ type: BLOCK_PENDING, payload: {} });
    try {
      const response = await fetch(`${API_URL}/${block}`);
      if (response.status === 200) {
        let data = await response.json();

        if (data?.error) {
          dispatch({ type: BLOCK_ERROR, payload: { isError: true } });
        } else if (!data.result) {
          dispatch({
            type: BLOCK_SUCCESS,
            payload: {
              number: '',
              hash: '',
              transactions: [],
            },
          });
        }
        dispatch({
          type: BLOCK_SUCCESS,
          payload: data.result,
        });
      }
    } catch (err) {
      dispatch({ type: BLOCK_ERROR, payload: { isError: true } });
    }
  };

  return <BlockContext.Provider value={{ ...state, getBlock }}>{children}</BlockContext.Provider>;
};
export { BlockProvider, BlockContext };
