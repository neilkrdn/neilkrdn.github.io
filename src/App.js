import logo from './logo.svg';
import './App.css';
import RecentReads from './Composed/RecentReads.js';
import Landing from './Composed/Landing.js';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Landing/>}/>
      <Route path="/recentreads" element={<RecentReads/>}/>
    </Routes>
  );
}

export default App;
