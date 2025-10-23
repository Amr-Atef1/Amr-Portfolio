import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: {  duration: 0.7, delay: delay, type: 'spring',
      stiffness: 100,
      damping: 15, } }
  });
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <div class=" absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      

      <div className="container mx-auto px-8">
      <Navbar />
      <Hero container={container}/>
      <About container={container}/>
      <Experience container={container}/>
      <Technologies container={container}/>
      <Project/>
      <Contact/>
      </div>
      </div>

  );
}

export default App;
