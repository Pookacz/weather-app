import { createStore } from "redux";
import weatherApp from "../Reducer/index";

const store = createStore(
  weatherApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
