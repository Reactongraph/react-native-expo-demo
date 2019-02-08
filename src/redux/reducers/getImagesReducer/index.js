export default function reducer(
  state = {
    getImages: [],
  },
  action,
) {
  switch (action.type) {
    case 'GET_IMAGES_SUCCESS': {
      return { ...state, getImages: action.payload };
    }
    case 'GET_IMAGES_FAILED': {
      return { ...state, getImages: action.payload };
    }
    default: {
      return state;
    }
  }
}
