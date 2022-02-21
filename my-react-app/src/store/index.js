import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile/reduser';
import { chatsReduser } from './chats/reduser';
import { messagesReduser } from './messages/reducer';

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chatsList: chatsReduser,
    messages: messagesReduser
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());