 import logo from './logo.svg';
import './App.css';

import {Route}  from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';

import Contact from './components/Contact';
import Login from './components/Login';
import Singup from './components/Singup';

function App() {
  return (
    <>
    <Navbar/>  
   <Route exact path="/">
   <Home/>
   </Route>

   
   <Route  path="/contact">
   <Contact/>
   </Route>

   <Route  path="/login">
   <Login/>
   </Route>

   <Route path="/singup">
   <Singup/>
   </Route>
  
    </>
  );
}

export default App;
