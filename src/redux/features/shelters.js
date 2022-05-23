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

	  case "shelter/patch/pending":
      return {
        ...state,
        loading: true,
      };
    case "shelter/patch/fulfilled":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload._id) {
            item = action.payload;
            return item;
          }
          return item;
        }),
        loading: false,
      };

    case "shelter/patch/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
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

export const editShelter = (id, file, name, contacts, address, email, requisities, description) => {
	return async (dispatch) => {
	  dispatch({ type: "shelter/patch/pending" });
	  const formData = new FormData();
	  formData.append("img", file);
	  formData.append("name", name);
	  formData.append("contacts", contacts);
	  formData.append("address", address);
	  formData.append("email", email);
	  formData.append("requisities", requisities);
	  formData.append("description", description);
	  try {
		// formData.append("description", description);
  
		const res = await fetch(`http://localhost:4000/shelter/${id}`, {
		  method: "PATCH",
		  body: formData,
		});
		const data = await res.json();
		console.log(data)
  
		dispatch({ type: "shelter/patch/fulfilled", payload: data });
	  } catch (error) {
		dispatch({ type: "shelter/patch/rejected", payload: error.message });
	  }
	};
  };
