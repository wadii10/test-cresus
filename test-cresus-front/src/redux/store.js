import { applyMiddleware, compose, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import  userReducer  from "./reducer";

const persistConfig = {
  key: "test-cresus",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, userReducer)

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  pReducer,
  compose(applyMiddleware(thunk), devtools)
);

const persistor = persistStore(store);

export { persistor, store }