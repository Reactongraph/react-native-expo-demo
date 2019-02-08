import { put, takeLatest } from 'redux-saga/effects';

export const watchUserAddContact = function* watchUserAddContact() {
  yield takeLatest('ADD_CONTACT', function* (action) {
    try {
      yield put({ type: 'ADD_CONTACT_SUCCESS', payload: action.payload });
    } catch (error) {
      yield put({ type: 'ADD_CONTACT_FAILED', payload: error });
    }
  });
};
