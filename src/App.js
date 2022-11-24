
import Button from "./components/Button";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Launches from "./views/Launches";
import Capsules from "./views/Capsules";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
    return (
        <Router>
             <Navbar />
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/launches' element={<Launches/>} />
              <Route exact path='/capsules' element={<Capsules/>} />
            </Routes>
      </Router>
    );
}
 

export default App;