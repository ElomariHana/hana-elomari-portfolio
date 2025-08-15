import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import LiveDemos from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen flex flex-col justify-center py-12"><Home /></section>
        <section id="about" className="min-h-screen flex flex-col justify-center py-12"><About /></section>
        <section id="services" className="min-h-screen flex flex-col justify-center py-12"><Services /></section>
        <section id="portfolio" className="min-h-screen flex flex-col justify-center py-12"><LiveDemos /></section>
        <section id="contact" className="min-h-screen flex flex-col justify-center py-12"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
