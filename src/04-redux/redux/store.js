import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxTrunk from 'redux-thunk'
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabberReducer";
import CinemasReducer from "./reducers/CinemasReducer";

const reducers = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemasReducer,
    
})
const store = createStore(reducers,applyMiddleware(reduxTrunk))
export default store