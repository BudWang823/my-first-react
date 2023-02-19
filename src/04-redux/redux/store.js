import { combineReducers, createStore } from "redux";

import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabberReducer";
const reducer = combineReducers({
    CityReducer,
    TabbarReducer
})
const store = createStore(reducer)
export default store