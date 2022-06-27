import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/surveys" element={<Dashboard />} />
            <Route path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;