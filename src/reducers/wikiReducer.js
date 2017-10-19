import * as types from '../actions/actionTypes';

export default function wikiReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_WIKI: {
      const [, title, description, link] = action.payload.data;
      const limit = title.length;
      const wikis = [];

      for (let i = 0; i < limit; i++) {
        wikis.push({
          title: title[i],
          description: description[i],
          link: link[i]
        });
      }

      return wikis;
    }
    default:
      return state;
  }
}
