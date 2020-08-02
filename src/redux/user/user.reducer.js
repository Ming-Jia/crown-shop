import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

// If state never been defined, it can fall back to the INITIAL_STATE value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
