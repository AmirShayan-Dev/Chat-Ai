import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/Components/LogIn comp/Login";
import Home from "./assets/Components/Home";

function App() {
  return (
    <Router basename="/Chat-Ai">
      {" "}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
