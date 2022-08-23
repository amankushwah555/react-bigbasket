import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Productdetails from './components/Productdetails';
import Home from './components/Home';
import Updateproduct from './components/Updateproduct';
import Createnewproduct from './components/Createnewproduct';
import Productpage from './components/Productpage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/productdetails" element={<Productdetails/>}/>
          <Route path="/updateproduct" element={<Updateproduct/>}/>
          <Route path="/createnewproduct" element={<Createnewproduct/>}/>
          <Route path="/productpage" element={<Productpage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
