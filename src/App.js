import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MenuPanel from './components/MenuPanel';
import { AppProvider } from './AppContext';
import Services from './components/Services';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Sidebar />
        <MenuPanel />

        <Hero />
        <Services />
      </div>
    </AppProvider>
  );
}

export default App;
