export const GET_DATA = 'GET_DATA';
export const PUT_DATA = 'PUT_DATA';
export const GET_USER_INFO = 'GET_USER_INFO';
export const PUT_USER_INFO = 'PUT_USER_INFO';
export const GET_START_FILTER_DATE = 'GET_START_FILTER_DATE';
export const GET_END_FILTER_DATE = 'GET_END_FILTER_DATE';

export const getDataAction = () => ({
  type: GET_DATA
})

export const putDataAction = (data) => ({
  type: PUT_DATA,
  payload: data,
})

export const getUserInfoAction = (user) => ({
  type: GET_USER_INFO,
  payload: user,
})

export const putUserInfoAction = (data) => ({
  type: PUT_USER_INFO,
  payload: data,
})

export const getStartFilterDateAction = date => ({
  type: GET_START_FILTER_DATE,
  payload: date,
})

export const getEndFilterDateAction = date => ({
  type: GET_END_FILTER_DATE,
  payload: date,
})
