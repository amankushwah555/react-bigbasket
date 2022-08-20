import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Productdetails from './components/Productdetails';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/productdetails" element={<Productdetails/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
