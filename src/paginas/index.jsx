import React from 'react';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>           
            <Cabecera /> 
            
            
            <header class="masthead d-flex align-items-center position-relative vh-100 cover hero">
    <div class="container"> 
        <div class="masthead-subheading">Bienvenidos a Mocasino</div>
        <div class="masthead-heading text-uppercase">Monitoreo de Casinos</div>
        <Link to="/jugar"><button type="button" class="w-20 btn-lg btn-iniciar-sesion">Empieza ahora</button></Link>
    </div>
        </header>
            
            
            <Pie />
            
        </div>
    )
}

export default index
