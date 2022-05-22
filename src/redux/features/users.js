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

      case 'user/rating/pending':
        return {...state, loading: true}

      case 'user/rating/pending':
        return {...state, items: [...state.items.map(item => {
          if (item._id === action.payload.id) {
            item.rating = [...item.rating, action.payload.rating]
            return item
          }
          return item
        })]};

        case 'user/rating/rejected':
          return {...state, error: action.payload, loading: false}
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

export const addRating = (rating, id) => {
  return async (dispatch) => {
    dispatch({ type: "user/rating/pending" });
    try {
      const res = await fetch(`http://localhost:4000/user/${id}/rating`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ rating }),
      });
      const json = await res.json();

      dispatch({ type: "user/raing/fulfilled", payload: { id, rating } });
    } catch (err) {
      dispatch({ type: "user/rating/rejected", payload: err.message });
    }
  };
};
