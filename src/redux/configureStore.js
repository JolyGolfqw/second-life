import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pets from "./features/pets";
import category from "./features/categories";
import application from "./features/application";
import shelters from "./features/shelters";
import petsKeeping from "./features/petsKeeping"
import news from "./features/news"
import fundraising from "./features/fundraising"
import gallery from "./features/gallery"

export const store = createStore(
  combineReducers({ pets, category, fundraising, application, shelters, petsKeeping, news, gallery }),
  composeWithDevTools(applyMiddleware(thunk))
);
