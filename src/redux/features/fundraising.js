const initialState = {
    items: [],
    error: null,
    loading: false,
  };
  
  export default function pets(state = initialState, action) {
    switch (action.type) {
      case "pets/get/fulfilled":
        return { ...state, items: action.payload, loading: false };
      case "pets/get/pending":
        return { ...state, loading: true };
      case "pets/get/rejected":
        return { ...state, error: action.payload, loading: false };

      case "pet/add/pending":
        return {...state, loading: true}

      case 'pet/add/fulfilled': 
      return {...state, items: [...state.items, action.payload], loading: false}

      case 'pets/add/rejected': 
      return {...state, error: action.payload, loading: false}
      default:
        return state;
    }
  }

  export const loadFundraisings = () => {
    return async (dispatch) => {
      dispatch({ type: "pets/get/pending" });
      try {
        const res = await fetch("http://localhost:4000/fundraising");
        const json = await res.json();
        dispatch({ type: "pets/get/fulfilled", payload: json });
        // console.log(json)
      } catch (err) {
        dispatch({ type: "pets/get/rejected", payload: err.message });
      }
    };
  };

  export const addFundraising = (file, title, organizer, amount, cardNumber, phoneNumber, description) => {
    return async (dispatch) => {
      dispatch({type: 'pet/add/pending'})
      try {
        const formData = new FormData()

        formData.append('img', file)
        formData.append('title', title)
        formData.append('organizer', organizer)
        formData.append('amount', amount)
        formData.append('cardNumber', cardNumber)
        formData.append('phoneNumber', phoneNumber)
        formData.append('description', description)

        const res = await fetch("http://localhost:4000/fundraising", {
          method: 'POST',
          body: formData
        })

        const data = await res.json()
        dispatch({type: 'pet/add/fulfilled', payload: data})
        console.log(data)
      } catch (err) {
        dispatch({type: "pet/add/rejected", error: err.message})
      }
    }
  }