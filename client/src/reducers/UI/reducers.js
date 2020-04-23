import { CURRENT_PAGE, LOADING_DATA } from './actions';

const initialState = {
  currentPage: 1,
  usersAmount: 50,
  isLoading: true
};

export const UI = (state=initialState, action) => {
  switch (action.type) {  
    case CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage,
        usersAmount: action.payload.usersAmount,
      }
    }
    case LOADING_DATA: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    default: return state;
  }
}
