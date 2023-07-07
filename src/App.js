import './App.css';
import TopBanner from './components/TopBanner';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Misc from './pages/Misc';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
