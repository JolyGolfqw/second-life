import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pets from "./features/pets";
import category from "./features/categories";
import petsKeeping from "./features/petsKeeping"

export const store = createStore(
  combineReducers({ pets, category, petsKeeping }),
  composeWithDevTools(applyMiddleware(thunk))
);
