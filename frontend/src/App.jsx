import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Event from  "./components/Event";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Event />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;