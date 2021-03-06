// SurveyFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { useNavigate } from 'react-router-dom';
import * as actions from '../../actions';



const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const navigate = useNavigate();
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, navigate)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStoreToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStoreToProps, actions)(SurveyFormReview);
