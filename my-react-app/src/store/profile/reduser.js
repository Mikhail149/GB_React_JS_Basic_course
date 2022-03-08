import { PROFILE_CHANGE_SHOW_NAME } from './action';

const ititialState = {
  showName: false,
  user: '',
  userID: '',
}

export const profileReducer = (state = ititialState, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName
      }
    default:
      return state;
  }
}