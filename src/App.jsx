import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Crud from "./pages/crud";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Crud />}/>
      <Route path="auth" element={<Auth />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
