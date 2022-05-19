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

  export const addPet = (file, petName, petAge, petGender, petDesc, petCategory) => {
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

        const res = await fetch("http://localhost:4000/pets", {
          method: 'POST',
          body: formData
        })

        const data = await res.json()
        dispatch({type: 'pet/add/fulfilled', payload: data})
      } catch (err) {
        dispatch({type: "pet/add/rejected", error: err.message})
      }
    }
  }