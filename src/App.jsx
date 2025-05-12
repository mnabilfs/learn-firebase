import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth from "./pages/auth";
import AuthGoogle from "./pages/AuthGoogle";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthGoogle />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
