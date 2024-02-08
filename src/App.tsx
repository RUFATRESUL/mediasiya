import React from 'react';
import { Header } from './components/Header';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';


import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Authentication } from './components/Authentication';
import { Detail } from './components/Detail';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/haqqımızda' element={<About/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home/:detailId' element={<Detail/>} />
        <Route path='/əlaqə' element={<Contact/>}/>
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
