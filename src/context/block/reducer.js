import { BLOCK_SUCCESS, BLOCK_PENDING, BLOCK_ERROR } from './types';

export default (state, { type, payload }) => {
  switch (type) {
    case BLOCK_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case BLOCK_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        ...payload,
      };
    case BLOCK_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
