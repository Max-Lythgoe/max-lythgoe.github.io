import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Header />
     <Projects />
     <About />
     <Skills />
    </div>
  );
}

export default App;
