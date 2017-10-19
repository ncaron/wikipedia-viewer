import axios from 'axios';
import * as types from './actionTypes';

export function fetchWiki(term) {
  const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${term}&limit=500&redirects=resolve&warningsaserror=1&utf8=1&ascii=1`;

  const request = axios.get(URL);

  return {
    type: types.FETCH_WIKI,
    payload: request
  };
}
