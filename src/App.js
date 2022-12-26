import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
