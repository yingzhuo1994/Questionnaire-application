import { FETCH_USER } from "./types";

const axios = require("axios");

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, navigate) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  navigate('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
