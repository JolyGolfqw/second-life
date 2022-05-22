const initialState = {
  signingUp: false,
  signingIn: false,
  errorSignUp: null,
  errorSignIn: null,
  loading: false,
	userId: localStorage.getItem('userId'),
	token: localStorage.getItem('token'),
	name: localStorage.getItem('name'),
};

export default function application(state = initialState, action) {
  switch (action.type) {
    // это для регистрации приюта
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

    // это для регистрации пользователя
    case "user/signup/pending":
      return {
        ...state,
        signingUp: true,
        errorSignUp: null,
        loading: true,
      };
    case "user/signup/fulfilled":
      return {
        ...state,
        loading: false,
        signingUp: false,
      };
    case "user/signup/rejected":
      return {
        ...state,
        signingUp: false,
        errorSignUp: action.error,
      };

			// это авторизация юзера
			case 'user/signin/pending':
				return {
					...state,
					signingIn: true,
					errorSignIn: null,
					loading: true
				};
			case 'user/signin/fulfilled':
				return {
					...state,
					signingIn: false,
					loading: false
				};
			case 'user/signin/rejected':
				return {
					...state,
					signingIn: false,
					errorSignIn: action.error
				}

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
  description
) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });
    const formData = new FormData();
    formData.append("img", file);
    formData.append("login", login);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("contacts", contacts);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("requisities", requisities);
    formData.append("description", description);
    try {
      const response = await fetch("http://localhost:4000/shelters", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: "application/signup/fulfilled", payload: data });
    } catch (err) {
      dispatch({ type: "application/signup/rejected", payload: err.message });
    }
  };
};

export const createUser = (name, login, password) => {
	return async (dispatch) => {
		dispatch({ type: 'user/signup/pending' });
		try {
			const response = await fetch('http://localhost:4000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, login, password })
			})
			const data = response.json();
			console.log(data)
			if (data.error) {
				dispatch({ type: 'user/signup/rejected', error: data.error })
			} else {
				dispatch({ type: 'user/signup/fulfilled', payload: data })
			}
		} catch (err) {
			dispatch({ type: "user/signup/rejected", error: err.message });
		}
	}
}

export const authUser = (login, password) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'authUser/signin/pending' });
			const response = await fetch('http://localhost:4000/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ login, password })
			});
			const data = await response.json();

			if (data.error) {
				dispatch({ type: 'authUser/signin/rejected', error: data.error })
			} else {
				dispatch({ type: 'authUser/signin/fulfilled', payload: data});
				localStorage.setItem('token', data.token);
				localStorage.setItem('userId', data.id);
				localStorage.setItem('name', data.name)
			}
		} catch (err) {
			dispatch({ type: "authUser/signin/rejected", error: err.message });
		}
	}
}
