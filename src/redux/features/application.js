const initialState = {
  signingUp: false,
  signingIn: false,
  errorSignUp: null,
  errorSignIn: null,
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    // это для регистрации
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        errorSignUp: null,
        loading: true,
      };
    case "application/signup/fulfilled":
      return {
        ...state,
        loading: false,
        signingUp: false,
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        errorSignUp: action.error,
      };

    // это для авторизации

    default: {
      return state;
    }
  }
}

export const createShelter = (
	file,
  login,
  password,
  name,
  contacts,
  address,
  email,
  requisities,
  description,
) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });
		const formData = new FormData();
		formData.append('img', file)
		formData.append('login', login);
		formData.append('password', password);
		formData.append('name', name);
		formData.append('contacts', contacts);
		formData.append('address', address);
		formData.append('email', email);
		formData.append('requisities', 
		requisities);
		formData.append('description', 
		description);
    try {
			
			const response = await fetch('http://localhost:4000/shelters', {
				method: 'POST',
				body: formData
			})
			const data = await response.json();
			console.log(data);
			dispatch({ type: "application/signup/fulfilled", payload: data });
    } catch (err) {
      dispatch({ type: "application/signup/rejected", payload: err.message });
    }
  };
};
