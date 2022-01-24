import { filmActionTypes } from './action-type';

const initialState = {
  films: [],
};

export const filmsReducer = (state = initialState, action) => {
  console.log('Using FilmsReducer');
  switch (action.type) {
    case filmActionTypes.load:
      return { ...state, films: [...action.films] };
    case filmActionTypes.add:
      return { ...state, films: [...state.films, action.film] };
    case filmActionTypes.toggle:
      return {
        ...state,
        films: state.films.map((item) =>
          item.id === action.id
            ? { ...item, isViewed: !item.isViewed }
            : { ...item }
        ),
      };
    case filmActionTypes.remove:
      return {
        ...state,
        films: state.films.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
