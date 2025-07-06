import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Event from  "./components/Event";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
