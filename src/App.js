import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MenuPanel from './components/MenuPanel';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Sidebar />
        <MenuPanel />

        <Hero />
      </div>
    </AppProvider>
  );
}

export default App;
