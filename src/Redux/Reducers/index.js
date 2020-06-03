import { combineReducers } from "redux";
import filterCardReducer from "../Reducers/filterCardReducer";
import searchCarReducer from "../Reducers/searchCarReducer";
const allReducers = combineReducers({
  filterListCards: filterCardReducer,
  listCars: searchCarReducer,
});

export default allReducers;
