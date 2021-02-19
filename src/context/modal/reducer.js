import { SET_MODAL } from './types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
