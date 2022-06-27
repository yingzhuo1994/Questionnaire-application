import { FETCH_USER } from "./types";

const axios = require('axios');

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
};
