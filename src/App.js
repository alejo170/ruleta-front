import './estilos/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './paginas/index';
import Jugadores from './paginas/Jugadores';
import { UserContext } from './context/userContext';
import React, { useState} from 'react';

function App() {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider value={{ userData, setUserData }}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/jugadores' element={<Jugadores />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
