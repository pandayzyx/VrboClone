import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { registerreducer } from "../Redux/RegisterUser/registerreducer";
import { loginreducer } from "../Redux/LoginUser/loginreducer";
import { listingreducer } from "../Redux/Listing/listingreducer";
import { entityreducer } from "../Redux/Entity/entityreducer";
import { bookingreducer } from "../Redux/Booking/bookingreducer";
// import thunk from "redux-thunk"

const thunk = (store) => (next) => (action) => {
  typeof action === "function" ? action(store.dispatch) : next(action);
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("vrboState", serializedState);
  } catch (e) {
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("vrboState");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const rootreducer = combineReducers({
  register: registerreducer,
  login: loginreducer,
  list: listingreducer,
  entity: entityreducer,
  book: bookingreducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootreducer,
  loadFromLocalStorage(),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

console.log(store.getState());
