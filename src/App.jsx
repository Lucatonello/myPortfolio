import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from "./translations/LanguageContext"; 

function App() {

  return (
    <>
     <LanguageProvider>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
     </LanguageProvider>
    </>
  )
}

export default App
