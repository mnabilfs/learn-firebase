import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
