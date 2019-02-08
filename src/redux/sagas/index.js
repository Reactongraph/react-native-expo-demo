import { all } from 'redux-saga/effects';
import { watchUserAddContact } from './addContactSaga';

const rootSaga = function* rootSaga() {
  yield all([
    watchUserAddContact(),
  ]);
};

export default rootSaga;
