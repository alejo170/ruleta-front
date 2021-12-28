import './estilos/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './paginas/index';
import Jugadores from './paginas/jugadores';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/jugadores' element={<Jugadores />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
