import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pets from "./features/pets";
import category from "./features/categories";
import application from "./features/application";
import shelters from "./features/shelters";
import petsKeeping from "./features/petsKeeping"
import news from "./features/news"

export const store = createStore(
  combineReducers({ pets, category,  application, shelters, petsKeeping, news }),
  composeWithDevTools(applyMiddleware(thunk))
);
