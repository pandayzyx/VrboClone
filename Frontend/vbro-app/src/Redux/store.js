import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {registerreducer} from "../Redux/RegisterUser/registerreducer"
import {loginreducer} from "../Redux/LoginUser/loginreducer"
import {listingreducer} from  "../Redux/Listing/listingreducer"
import {entityreducer} from "../Redux/Entity/entityreducer"
// import thunk from "redux-thunk"

const thunk = store => (next) => (action) => {
	typeof action === "function"?action(store.dispatch):next(action)
};
const rootreducer = combineReducers({register:registerreducer,login:loginreducer,list:listingreducer,entity:entityreducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

export const store = createStore(
	rootreducer,
	composeEnhancers(applyMiddleware(thunk))
);
console.log(store.getState())



