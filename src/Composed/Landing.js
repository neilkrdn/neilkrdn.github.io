import './Landing.css';
import Header from '../Components/Header.js';
import Home from '../Components/Home.js';
import Projects from '../Components/Projects.js';
import About from '../Components/About.js';
import Footer from '../Components/Footer.js';

const Landing = () => {
    return (
        <div className="Landing">
          <Header/>
          <div id="home"/><Home/>
          <div id="projects"><Projects/></div>
          <div id="about"><About/></div>
          <Footer/>
        </div>
    )
}

export default Landing;