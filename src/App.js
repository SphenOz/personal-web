import './App.css';
import './assets/css/fonts.css';
import TopBanner from './components/TopBanner';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Misc from './pages/Misc';
import Home from './pages/Home';


function App() {
  return (
    <>
    <div className='bg'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Misc" element={<Misc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
