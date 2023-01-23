import './App.css';
import styles from './appStyles.module.css';
import { React, useReducer } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import NameList from './components/NameList';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound';
import Services from './components/Services/Services';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import FetchApi from './components/FetchApi/FetchApi';
import Blog from './components/Blog/Blog';

import { AppContainer } from './components/Container.style';
import Connexion from './components/Connexion/Connexion';
import Inscription from './components/Inscription/Inscription';


function App() {
  return (
    <div className="App">
    <AppContainer>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/namelist' element={<NameList/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>

        <Route path='/services' element={<Services/>}>
          <Route path='/services/developpement' element={<Developpement/>}/>
          <Route path='/services/marketing' element={<Marketing/>}/>
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/gestionPost' element={<GestionPost/>}/>
        </Route>

        <Route path='/fetchapi' element={<FetchApi />}/>

        <Route path='/allposts' element={<Blog/>}/>

        <Route path='/login' element={<Connexion/>} />
        <Route path='/register' element={<Inscription/>} />
      
      
        <Route path='/*' element={<NotFound />} />
      
      </Routes>

    </AppContainer>

    </div>
  );
}


export default App;
