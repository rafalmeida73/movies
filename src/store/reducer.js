import * as Types from './types';

const initialState = {
  movieId: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_MOVIE_ID:
      return { movieId: action.payload.movieId }
    default: return state;
  }
}

export { reducer };