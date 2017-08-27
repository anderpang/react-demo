import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {reducer as menuReducer} from "../components/menu/";
import {reducer as bannerReducer} from "../components/banner/";
import {reducer as listReducer} from "../components/list/";

let reducers=combineReducers({
    menu:menuReducer,
    banner:bannerReducer,
    list:listReducer
});

let store=createStore(reducers,applyMiddleware(thunk));

export default store;
