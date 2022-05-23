const initialState = {
  signingUp: false,
  signingIn: false,
  errorSignUp: null,
  errorSignIn: null,
  loading: false,

	//это юзер
  userId: localStorage.getItem("userId"),
  token: localStorage.getItem("token"),
  name: localStorage.getItem("name"),
  role: localStorage.getItem("role"),

	//это приют
	shelterToken: localStorage.getItem("token"),
	shelterId: localStorage.getItem("shelterId"),
	shelterName: localStorage.getItem("name"),
	avatar: localStorage.getItem("avatar"),
	description: localStorage.getItem('description'),
	contacts: localStorage.getItem('contacts'),
	address: localStorage.getItem('address'),
	email: localStorage.getItem('email'),
	requisities: localStorage.getItem('requisities')
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
    case "authUser/signin/pending":
      return {
        ...state,
        signingIn: true,
        errorSignIn: null,
        loading: true,
      };
    case "authUser/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        loading: false,
      };
    case "authUser/signin/rejected":
      return {
        ...state,
        signingIn: false,
        errorSignIn: action.error,
      };

			// это авторизация приюта
			case "authShelter/signin/pending":
				return {
					...state,
					signingIn: true,
					errorSignIn: null,
					loading: true,
				};
			case "authShelter/signin/fulfilled":
				return {
					...state,
					signingIn: false,
					loading: false,
				};
			case "authShelter/signin/rejected":
				return {
					...state,
					signingIn: false,
					errorSignIn: action.error,
				};

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
    dispatch({ type: "user/signup/pending" });
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, login, password }),
      });
      const data = await response.json();

      if (data.error) {
        dispatch({ type: "user/signup/rejected", error: data.error });
      } else {
        dispatch({ type: "user/signup/fulfilled", payload: data });
      }
    } catch (err) {
      dispatch({ type: "user/signup/rejected", error: err.message });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "authUser/signin/pending" });
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const data = await response.json();

      if (data.error) {
        dispatch({ type: "authUser/signin/rejected", error: data.error });
      } else {
        dispatch({ type: "authUser/signin/fulfilled", payload: data });
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("name", data.name);
        localStorage.setItem("role", data.role);
				window.location.reload()
      }
    } catch (err) {
      dispatch({ type: "authUser/signin/rejected", error: err.message });
    }
  };
};

export const authShelter = (login, password) => {
	return async (dispatch) => {
    try {
      dispatch({ type: "authShelter/signin/pending" });
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const data = await response.json();

      if (data.error) {
        dispatch({ type: "authShelter/signin/rejected", error: data.error });
      } else {
        dispatch({ type: "authShelter/signin/fulfilled", payload: data });
        localStorage.setItem("token", data.token);
        localStorage.setItem("shelterId", data.id);
        localStorage.setItem("name", data.name);
        localStorage.setItem("avatar", data.avatar);
				localStorage.setItem('description', data.description);
				localStorage.setItem('contacts', data.contacts);
				localStorage.setItem('address', data.address);
				localStorage.setItem('email', data.email);
				localStorage.setItem('requisities', data.requisites)
				window.location.reload()
      }
    } catch (err) {
      dispatch({ type: "authShelter/signin/rejected", error: err.message });
    }
  };
}
