import {legacy_createStore as createStore,combineReducers} from "redux";
import {counterReducer} from "./counterReducer.js";
import {cartReducer} from "./cartReducer.js";

const rootReducers = combineReducers({
    counter: counterReducer,
    productsCart: cartReducer
})

export const store = createStore(rootReducers)