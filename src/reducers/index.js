import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import chat from './chat-reducer';
import user from './user-reducer';

export default combineReducers({ chat, form, user });
