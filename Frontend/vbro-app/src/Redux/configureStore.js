import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { registerreducer } from "./RegisterUser/registerreducer";
import { loginreducer } from "./LoginUser/loginreducer";
import { listingreducer } from "./Listing/listingreducer";
import { entityreducer } from "./Entity/entityreducer";
import { bookingreducer } from "./Booking/bookingreducer";
import { verifyAuth } from "./LoginUser/action";
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
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("vrboState");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const rootreducer = combineReducers({
  register: registerreducer,
  login: loginreducer,
  list: listingreducer,
  entity: entityreducer,
  book: bookingreducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore() {
  const store = createStore(
    rootreducer,
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(thunk))
  );
  store.dispatch(verifyAuth());
  store.subscribe(() => saveToLocalStorage(store.getState()));
  console.log(store.getState());

  return store;
}
