import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./components/App";

const store = configureStore({reducer: {}}, {}, applyMiddleware());


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
