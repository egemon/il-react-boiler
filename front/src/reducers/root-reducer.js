import { combineReducers } from 'redux';
import about, { getCount } from './about-reducer';
import messages, { getMessagesList } from './messages-reducer';

export default combineReducers({
  about,
  messages,
});

export const getMessages = state => getMessagesList(state.messages);
export const getAboutCount = state => getCount(state.about);
