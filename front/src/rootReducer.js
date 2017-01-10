/**
 * Created by illialukianov on 10.01.17.
 */
import {createStore, combineReducers} from 'redux';

export default function createAppStore () {
  return createStore(combineReducers({
    one: function (state = {}, action) {
      return state;
    }
  }));
}