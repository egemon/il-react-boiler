import { combineReducers } from 'redux';
import about, { getCount } from './about-reducer';
import messages, { getMessagesList } from './messages-reducer';
import user, { login as loginSelect, pass as passSelect } from './user-reducer';

export default combineReducers({
  about,
  messages,
  user,
});

export const getMessages = state => getMessagesList(state.messages);
export const getAboutCount = state => getCount(state.about);
export const login = state => loginSelect(state.user);
export const pass = state => passSelect(state.user);
