export default function reducer(
  state = {
    getImagesStatus: 'uninitiated',
    getImages: [],
  },
  action,
) {
  switch (action.type) {
    case 'GET_IMAGES_SUCCESS': {
      return { ...state, getImagesStatus: 'success', getImages: action.payload };
    }
    case 'GET_IMAGES_FAILED': {
      return { ...state, getImagesStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
