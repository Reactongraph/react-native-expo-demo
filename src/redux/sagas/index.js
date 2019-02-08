import { all } from 'redux-saga/effects';
import { getImageList } from './getImagesSaga';

const rootSaga = function* rootSaga() {
  yield all([
    getImageList(),
  ]);
};

export default rootSaga;
