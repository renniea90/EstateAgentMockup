import DisplayProperty from './components/DisplayProperty';
import './App.css';
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
    </div>
  );
}

export default App;
