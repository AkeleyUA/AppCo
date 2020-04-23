import { putUserInfoAction, GET_USER_INFO} from '../reducers/users-data/actions';
import { takeEvery, put, call, select } from 'redux-saga/effects';


const fetchUserInfo = (currentUser, filterDate) => {
  const body = {
    currentUser,
    filterDate
  }
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(e => {throw e})
}

function* getUserInfoWorker() {
  const userId = yield select(state => state.usersData.currentUser);
  const filterDate = {
    startFilterDate: yield select(state => state.usersData.startFilterDate),
    endFilterDate: yield select(state => state.usersData.endFilterDate)
  }
  const data = yield call(fetchUserInfo, userId, filterDate);
  yield put(putUserInfoAction(data))
}

export function* getUserInfoWatcher() {
  yield takeEvery(GET_USER_INFO, getUserInfoWorker)
}