import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./pages/rules/Rules";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Rules />} path="/rules" />
          <Route element={<AboutUs />} path="/about-us" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
