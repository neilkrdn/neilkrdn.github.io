import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Landing from './Composed/Landing.js';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Landing/>}/>
      <Route path="/recentreads" element={<Header/>}/>
    </Routes>
  );
}

export default App;
