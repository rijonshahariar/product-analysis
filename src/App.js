import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
