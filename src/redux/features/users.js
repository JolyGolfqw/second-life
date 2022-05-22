const initialState = {
  items: [],
  error: null,
  loading: false,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case "users/get/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/get/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "users/get/rejected":
      return {
        ...state,
        error: action.payload,
      };

		default: 
			return state
  }
}

export const loadUsers = () => {
  return async (dispatch) => {
		dispatch({ type: 'users/get/pending' })
    try {
      const res = await fetch("http://localhost:4000/users");
      const json = await res.json();
      dispatch({ type: "users/get/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "users/get/rejected", payload: err.message });
    }
  };
};
