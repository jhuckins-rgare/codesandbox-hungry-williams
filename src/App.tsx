import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
