import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Forgot from './components/Auth/Forgot';
import EventPage from './components/Home/EventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<Forgot/>}/>
        <Route path='/event/:id' element={<EventPage/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
