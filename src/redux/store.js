import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import mainReducer from "./main-reducer";
import thunkMiddleware from "redux-thunk";
import favouritesReducer from "./favourites-reducer";
import randomReducer from "./random-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    favouritesPage: favouritesReducer,
    randomPage: randomReducer,
    searchComponent: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;