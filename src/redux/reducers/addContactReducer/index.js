export default function reducer(
  state = {
    addContactData: [],
  },
  action,
) {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS': {
      return { ...state, addContactData: action.payload };
    }
    case 'ADD_CONTACT_FAILED': {
      return { ...state, addContactData: action.payload };
    }
    default: {
      return state;
    }
  }
}
