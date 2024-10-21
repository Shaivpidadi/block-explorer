import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./containers/Layout";

import "./App.css";

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
