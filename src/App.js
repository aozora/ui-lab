import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MenuPanel from './components/MenuPanel';
import { AppProvider } from './AppContext';
import Services from './components/Services';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import servicesStyles from './components/Services.module.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Sidebar />
        <MenuPanel />

        <Hero />
        <Services />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </AppProvider>
  );
}

export default App;
