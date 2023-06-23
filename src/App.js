import "./App.css";
// import Footer from './components/Common/Footer';
// import  Header from "./components/Common/Header";
// import MainComponent from './components/LandingPage/MainComponent'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import ComparePage from "./pages/Compare";
import WatchlistPage from "./pages/Watchlist";
import CoinPage from "./pages/Coin";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />

          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
