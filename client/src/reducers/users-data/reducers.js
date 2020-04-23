import {PUT_DATA, GET_USER_INFO, PUT_USER_INFO, GET_END_FILTER_DATE, GET_START_FILTER_DATE} from './actions';

const date = new Date().toLocaleDateString();
const inWeek = new Date();


const initialState = {
  data: [],
  currentUser: null,
  currentUserInfo: null,
  endFilterDate: date,
  startFilterDate: new Date(inWeek.setDate(inWeek.getDate() - 7)).toLocaleDateString()
};

export const usersData = (state=initialState, action) => {
  switch (action.type) {  
    case PUT_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case GET_USER_INFO: {
      return {
        ...state,
        currentUser: action.payload,
      }
    }
    case PUT_USER_INFO: {
      return {
        ...state, 
        currentUserInfo: action.payload,
      }
    }
    case GET_END_FILTER_DATE: {
      return {
        ...state,
        endFilterDate: action.payload
      }
    }
    case GET_START_FILTER_DATE: {
      return {
        ...state,
        startFilterDate: action.payload
      }
    }
    default: return state;
  }
}
