import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/Projects/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
      </Router>
  );
}

export default App;
