import { combineReducers } from 'redux';
import about, { getCount } from './pages/about/about-reducer';
import messages, { getMessagesList } from './pages/messages/messages-reducer';

export default combineReducers({
  about,
  messages,
});

export const getMessages = state => getMessagesList(state.messages);
export const getAboutCount = state => getCount(state.about);
