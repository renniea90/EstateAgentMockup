import AllBuyers from './components/AllBuyers';
import AllSellers from './components/AllSellers';
import Data from './data/Data.json';
import './App.css';
import DisplayProperty from './components/DisplayProperty';
import RegisterBuyer from './components/RegisterBuyer';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import BuyersPage from './pages/Buyers';
import SellersPage from './pages/Sellers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="white-container">
          <div className="top-container">
            <h1 className="logo">LOGO</h1>
            <h2 className="slogan">A cheesy slogan goes here</h2>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buyers' element={<BuyersPage />} />
          <Route path='/sellers' element={<SellersPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
