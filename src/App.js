import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    // we are using BEM naming convention
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
