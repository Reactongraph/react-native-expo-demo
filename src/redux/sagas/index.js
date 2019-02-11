import { all } from 'redux-saga/effects';
import { watchGetImageList } from './getImagesSaga';

const rootSaga = function* rootSaga() {
  yield all([
    watchGetImageList(),
  ]);
};

export default rootSaga;
