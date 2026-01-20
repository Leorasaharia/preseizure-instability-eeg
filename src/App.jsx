import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import CoreConcept from './components/CoreConcept';
import Methodology from './components/Methodology';
import KeyResults from './components/KeyResults';
import Interpretation from './components/Interpretation';
import Dashboard from './components/Dashboard';
import Reproducibility from './components/Reproducibility';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Motivation />
      <CoreConcept />
      <Methodology />
      <KeyResults />
      <Dashboard />
      <Interpretation />
      <Reproducibility />
      <About />
      <Footer />
    </div>
  )
}

export default App
