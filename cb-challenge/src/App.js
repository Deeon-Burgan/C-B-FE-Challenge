import logo from './logo.svg';
import './App.scss';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <LandingPage />
    </div>
  );
}

export default App;
