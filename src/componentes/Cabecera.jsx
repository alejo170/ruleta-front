import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../imagenes/logo.png';

const cabecera = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fondomenu text-uppercase fixed-top" id="mainNav">
            <div class="container">
    
            <img src={logo} alt='imagen' height="70" />
            <button class="navbar-toggler text-uppercase font-weight-bold bg-danger text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">

            <li><NavLink to='/' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-coins fa-fw' />
                    <span>Inicio</span>
                </div></NavLink></li>

        
        <li><NavLink to='/jugadores' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-users fa-fw' />
                    <span>Jugadores</span>
                </div></NavLink></li>
        
           
            
            
        </ul>
    </div>
</div>
</nav>

        </div>
    )
}

export default cabecera
