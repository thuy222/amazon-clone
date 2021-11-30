import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Header/Login";
import CheckOut from "./CheckOut";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        {/*  />
        <Route path="/login" exact element={} />
        <Route path="/" exact element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
