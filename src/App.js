import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navhead from './Component/Navhead';
import Home from './Component/Pages/Home';
import Search from './Component/Pages/Search';

function App() {
  return (
   <>
   
   <Navhead/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Search' element={<Search/>}/>
   </Routes>
   </>
  );
}

export default App;