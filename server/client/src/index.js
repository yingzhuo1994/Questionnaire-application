import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';

const store = configureStore({reducer: reducers}, {}, applyMiddleware(reduxThunk));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);