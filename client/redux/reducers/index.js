import { combineReducers } from 'redux';
import users from './users';
import showComponent from './showComponent';

const rootReducer = combineReducers({
  users,
  showComponent
})

export default rootReducer;
