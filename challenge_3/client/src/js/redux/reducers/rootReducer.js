import { combineReducers } from 'redux';
import changeScore from './changeScore';

const rootReducer = combineReducers({
  changeScore,
});

export default rootReducer;
