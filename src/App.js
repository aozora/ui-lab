import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MenuPanel from './components/MenuPanel';
import { AppProvider } from './AppContext';
import Services from './components/Services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Media from './components/Media';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Sidebar />
        <MenuPanel />

        <Hero />
        <Services />
        <Media />

        <br />
        <br />
        <br />
        <br />
      </div>
    </AppProvider>
  );
}

export default App;
