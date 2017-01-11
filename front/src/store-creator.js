import {createStore, combineReducers} from 'redux';
import about from 'pages/about/about-reducer';


export default function createAppStore () {
  return createStore(combineReducers({
    about
  }));
}