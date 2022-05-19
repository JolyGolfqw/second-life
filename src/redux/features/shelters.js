const initialState = {
  items: [],
  err: null,
  loading: false,
};

export default function shelters(state = initialState, action) {
  switch (action.type) {
    case "shelters/fetch/fulfilled":
      return {
        ...state,
        items: action.payload,
      };
    case "shelters/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "shelters/fetch/rejected":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export const loadShelters = () => {
  return async (dispatch) => {
    dispatch({ type: "shelters/fetch/pending" });
    try {
      const res = await fetch("http://localhost:4000/shelters");
      const json = await res.json();
      dispatch({ type: "shelters/fetch/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "shelters/fetch/rejected", payload: err.message });
    }
  };
};
