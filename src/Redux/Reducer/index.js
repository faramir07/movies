const initialState = {
  allMovies: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "allMovies":
      return {
        ...state,
        allMovies: action.payload
      };
    default:
      return state;
  }
};
