
import Button from "./components/Button";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Launches from "./views/Launches";
import Capsules from "./views/Capsules";
import Navbar from "./components/Navbar";
import DetailLaunche from "./views/DetailLaunche";
import React from "react";

function App() {
    return (
        <Router>
             <Navbar />
            <Routes>
              <Route exact path='/' element={<Launches/>} />
              <Route exact path='/launches' element={<Launches/>} />
              <Route exact path='/launches/:id' element={<DetailLaunche/>} />
              <Route exact path='/capsules' element={<Capsules/>} />
            </Routes>
      </Router>
    );
}
 

export default App;