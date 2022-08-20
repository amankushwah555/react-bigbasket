import logo from './logo.svg';
import './App.css';
import Newproduct from './components/Newproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updateproduct from './components/Updateproduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newproduct />} />  
        <Route path='/' element={<Updateproduct/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
