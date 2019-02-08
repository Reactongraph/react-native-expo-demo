import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from 'src/utils/ApiCaller';

const getImages = () => ApiCaller('/search?query=nature', 'get').then(response => response);
export const getImageList = function* imageList() {
  yield takeLatest('GET_IMAGES', function* (action) {
    yield put({ type: 'GET_IMAGES_INITIATED' });
    try {
      const data = yield call(getImages.bind(this, action.payload));
      yield put({ type: 'GET_IMAGES_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'GET_IMAGES_FAILED' });
    }
  });
};
