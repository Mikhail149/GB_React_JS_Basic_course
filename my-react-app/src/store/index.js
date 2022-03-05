import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from './profile/reduser';
import { chatsReduser } from './chats/reduser';
import { messagesReduser } from './messages/reducer';
import { usersReduser } from './users/reduser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'GBChat',
  storage,
};

const rooteRducer = combineReducers({
  profile: profileReducer,
  chatsList: chatsReduser,
  messages: messagesReduser,
  users: usersReduser
});

const persistedReducer = persistReducer(persistConfig, rooteRducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);