import { GET_DATA, putDataAction} from '../reducers/users-data/actions';
import { loadingDataAction } from '../reducers/UI/actions';
import { takeEvery, put, call, select } from 'redux-saga/effects';


const fetchData = (currentPage, usersAmount) => {
  const body = {
    currentPage,
    usersAmount
  }
  return fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(e => {throw e})
}

function* getDataWorker() {
  const currentPage = yield select(state => state.UI.currentPage);
  const usersAmount = yield select(state => state.UI.usersAmount);
  const data = yield call(fetchData, currentPage, usersAmount);
  yield put(loadingDataAction(true));
  yield put(putDataAction(data));
  yield put(loadingDataAction(false))
}

export function* getDataWatcher() {
  yield takeEvery(GET_DATA, getDataWorker);
}