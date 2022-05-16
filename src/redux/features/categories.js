const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case "categories/get/fulfilled":
      return { ...state, items: action.payload };
    case "categories/get/rejected":
      return { ...state, error: action.payload };
    case "categories/get/pending":
      return { ...state, loading: true };
    default:
      return state;
  }
}

export const loadCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "categories/get/pending" });
    try {
      const res = await fetch("http://localhost:4000/categories");
      const json = await res.json();
      dispatch({ type: "categories/get/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "categories/get/rejected", payload: err.message });
    }
  };

};
