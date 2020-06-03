import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import allReducer from "./Reducers/index";
import thunk from "redux-thunk";

const middleware = [logger, thunk];
const store = createStore(allReducer, applyMiddleware(...middleware));

export default store;
