const initialState = {
    items: [],
    error: null,
    loading: false,
  };
  
  export default function petsKeeping(state = initialState, action) {
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

  export const loadpetsKeeping = () => {
    return async (dispatch) => {
      dispatch({ type: "pets/get/pending" });
      try {
        const res = await fetch("http://localhost:4000/pets-keeping");
        const json = await res.json();
        dispatch({ type: "pets/get/fulfilled", payload: json });
      } catch (err) {
        dispatch({ type: "pets/get/rejected", payload: err.message });
      }
    };
  };

  export const addPetKeeping = (file, petName, petAge, petGender, petDesc, petCategory, petPrice, period, contact, address) => {
    return async (dispatch) => {
      dispatch({type: 'pet/add/pending'})
      try {
        const formData = new FormData()

        formData.append('img', file)
        formData.append('name', petName)
        formData.append('age', petAge)
        formData.append('gender', petGender)
        formData.append('description', petDesc)
        formData.append('type', petCategory)
        formData.append('price', petPrice)
        formData.append('period', period)
        formData.append('contact', contact)
        formData.append('address', address)

        const res = await fetch("http://localhost:4000/pets-keeping", {
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