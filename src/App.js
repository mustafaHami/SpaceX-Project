import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Launches from "./views/Launches";
import Rockets from "./views/Rockets";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
             <Navbar />
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/launches' element={<Launches/>} />
              <Route exact path='/rockets' element={<Rockets/>} />
            </Routes>
      </Router>
    );
}
 

export default App;