import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certification from './components/Certification';
import Footer from './components/Footer';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Education from './components/Education';

function App() {
  return (
    <div id="wrapper" className="App">
      <Navbar />
      <Header />
      <Home />
      <Skills /> 
      <Education />
      <Experience /> 
      <Projects />
      <Certification />    
      <Awards />
      <Volunteering />
      <Footer />
    </div>
  );
}

export default App;
