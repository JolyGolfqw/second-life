const initialState = {
    items: [],
    error: null,
    loading: false,
  };
  
  export default function pets(state = initialState, action) {
    switch (action.type) {
      case "pets/get/fulfilled":
        return { ...state, items: action.payload };
      case "pets/get/pending":
        return { ...state, loading: false };
      case "pets/get/rejected":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
  export const loadPets = () => {
    return async (dispatch) => {
      dispatch({ type: "pets/get/pending" });
      try {
        const res = await fetch("http://localhost:4000/pets");
        const json = await res.json();
        dispatch({ type: "pets/get/fulfilled", payload: json });
      } catch (err) {
        dispatch({ type: "pets/get/rejected", payload: err.message });
      }
    };
  };