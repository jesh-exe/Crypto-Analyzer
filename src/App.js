import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singlecoin from "./components/Singlecoin";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Predictor from "./components/Recommender";
import SingleCoin2 from "./components/Singlecoin";
import Sipcalculator from "./components/Sipcalculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Singlecoin />} />
            <Route path="/recommender" element={<Predictor />} />
            <Route path="/recommender/coin/:id" element={<Singlecoin />} />
            <Route path="/sip-calculator" element={<Sipcalculator />} />
          </Routes>
          <Alert />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;