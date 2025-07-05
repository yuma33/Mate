import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Event from  "./components/Event";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
