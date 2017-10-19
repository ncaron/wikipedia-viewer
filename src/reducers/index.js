import { combineReducers } from 'redux';
import wikiSearch from './wikiReducer';

const rootReducer = combineReducers({
  wikiSearch
});

export default rootReducer;
