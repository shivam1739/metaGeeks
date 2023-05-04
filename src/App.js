import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./atuh/Auth";
import Home from "./home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
