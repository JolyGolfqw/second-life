const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case "news/fetch/pending":
      return { ...state, loading: true };

    case "news/fetch/fulfilled":
      return { ...state, items: action.payload, loading: false };

    case "news/fetch/rejected":
      return { ...state, error: action.payload, loading: false };

    case 'news/add/pending':
        return {...state, loading: true}

        case "news/add/fulfilled":
      return { ...state, items: [...state.items, action.payload], loading: false };

    case "news/add/rejected":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}

export const loadNews = () => {
  return async (dispatch) => {
    dispatch({ type: "news/fetch/pending" });
    try {
      const res = await fetch("http://localhost:4000/news");
      const json = await res.json();
      console.log(json)
      dispatch({ type: "news/fetch/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "news/fetch/rejected", payload: err.message });
    }
  };
};

export const addNews = (file, title, description) => {
  return async (dispatch) => {
    dispatch({ type: "news/add/pending" });
    const formData = new FormData();

    formData.append("img", file);
    formData.append("title", title);
    formData.append("description", description);
    try {
      const res = await fetch("http://localhost:4000/news", {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      console.log(json)
      dispatch({ type: "news/add/fulfilled", payload: json });
    } catch (err) {
      dispatch({ type: "mews/add/rejected", error: err.message });
    }
  };
};
