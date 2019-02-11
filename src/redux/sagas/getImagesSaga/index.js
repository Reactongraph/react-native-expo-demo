import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from 'src/utils/ApiCaller';

const getImagesData = () => ApiCaller('/search?query=nature', 'get').then(response => response);

export const watchGetImageList = function* getImageList() {
  yield takeLatest('GET_IMAGES', function* (action) {
    try {
      const imageData = yield call(
        getImagesData.bind(this, action.payload),
      );
      yield put({
        type: 'GET_IMAGES_SUCCESS',
        payload: imageData.photos,
      });
    } catch (error) {
      yield put({ type: 'GET_IMAGES_FAILED' });
    }
  });
};
