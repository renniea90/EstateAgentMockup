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
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/buyers' element={<BuyersPage />} />
            <Route path='/sellers' element={<SellersPage />} />
          </Routes>
        </BrowserRouter>
      <main>       
      </main>
    </div>
  );
}

export default App;
