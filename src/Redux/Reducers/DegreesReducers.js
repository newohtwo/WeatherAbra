export const initialDegreesState = {
  degrees: true,
};

// create the reducer
export const toggleReducer = (state = initialDegreesState, action) => {
  switch (action.type) {
    case "CELSIUS":
      return { ...state, degrees: true };

    case "FAHRENHEIT":
      return { ...state, degrees: false };

    default:
      return state;
  }
};
