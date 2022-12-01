import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./pages/rules/Rules";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Rules />} path="/rules" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
