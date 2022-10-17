import React from "react";
import AppContent from "./containers/AppContent";
import HomePage from "./containers/HomePage";
import Router from "./router";
import Operation from "./components/Operation";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
