export const CURRENT_PAGE = 'CURRENT_PAGE';
export const LOADING_DATA = 'LOADING_DATA';

export const selectCurrentPageAction = (currentPage, usersAmount) => ({
  type: CURRENT_PAGE,
  payload: {
    currentPage,
    usersAmount
  },
})

export const loadingDataAction = (status) => ({
  type: LOADING_DATA,
  payload: status,
})
