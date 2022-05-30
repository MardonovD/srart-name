import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Telegram from "./components/Telegram";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telegram" element={<Telegram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
