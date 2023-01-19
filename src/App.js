import './App.css';
import styles from './appStyles.module.css';
import { React, useReducer } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import NameList from './components/NameList';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/namelist' element={<NameList/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
       
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;
