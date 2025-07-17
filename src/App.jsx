import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen flex flex-col justify-center py-12"><Home /></section>
        <section id="about" className="min-h-screen flex flex-col justify-center py-12"><About /></section>
        <section id="skills" className="min-h-screen flex flex-col justify-center py-12"><Skills /></section>
        <section id="portfolio" className="min-h-screen flex flex-col justify-center py-12"><Portfolio /></section>
        <section id="work" className="min-h-screen flex flex-col justify-center py-12"><WorkExperience /></section>
        <section id="education" className="min-h-screen flex flex-col justify-center py-12"><Education /></section>
        <section id="contact" className="min-h-screen flex flex-col justify-center py-12"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
