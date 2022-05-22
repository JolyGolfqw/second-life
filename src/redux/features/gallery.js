const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case "images/fetch/pending":
      return { ...state, loading: true };

    case "images/fetch/fulfilled":
      return { ...state, items: action.payload, loading: false };

    case "images/fetch/rejected":
      return { ...state, error: action.payload, loading: false };

    case "images/add/pending":
      return { ...state, loading: true };

    case "images/add/fulfilled":
      return { ...state, items:[...state.items, action.payload], loading: false };

    case "images/add/rejected":
      return { ...state, error: action.payload, loading: false };

      case "images/remove/pending":
      return { ...state, loading: true };

    case "images/remove/fulfilled":
      return { ...state, items:[...state.items.filter(item => item._id !== action.payload._id)], loading: false };

    case "images/remove/rejected":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}

export const loadImages = () => {
  return async (dispatch) => {
    dispatch({ type: "images/fetch/pending" });
    try {
      const res = await fetch("http://localhost:4000/gallery");
      const json = await res.json();
      dispatch({ type: "images/fetch/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "images/fetch/rejected", error: err.message });
    }
  };
};

export const addImages = (file) => {
  return async (dispatch) => {
    dispatch({ type: "images/add/pending" });

    const formData = new FormData();
    formData.append("img", file);
    try {
      const res = await fetch("http://localhost:4000/gallery",
        {
          method: "POST",
          body: formData,
        });
        const json = await res.json()
        dispatch({ type: "images/add/fulfilled", payload: json });

    } catch (err) {
      dispatch({ type: "images/add/rejected" });
    }
  };
};

export const deleteImage = (id) => {
    return async (dispatch) => {
      dispatch({ type: "images/remove/pending" });
      try {
        const res = await fetch(`http://localhost:4000/gallery/${id}`,
          {
            method: "DELETE",
          });
          const json = await res.json()
          dispatch({ type: "images/remove/fulfilled", payload: json });
  
      } catch (err) {
        dispatch({ type: "images/remove/rejected" });
      }
    };
  };
