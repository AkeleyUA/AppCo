import { all } from 'redux-saga/effects';
import { getDataWatcher } from './getData';
import { getUserInfoWatcher } from './getUser';

export default function* rootSaga() {
  yield all([
    getDataWatcher(),
    getUserInfoWatcher(),
  ]);
}
