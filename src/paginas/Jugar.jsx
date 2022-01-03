import React from 'react';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';



const Jugar = () => {

  
/*Esta funcion genera un numero aleatorio entre 0 y 100
si el numero generado es mayor o igual a 0 y menor o igual a 48, retorna rojo
si el numero generado es mayor o igual a 49 y menor o igual a 98, retorna negro
de lo contrario retorna verde */
const generarColor = () => {
    const numero = Math.floor((Math.random() * 101)) 
    
    if (numero >= 0 && numero <= 48) 
    return "Rojo"         
    if (numero >= 49 && numero <= 98) 
    return "Negro"
    else                              
    return "Verde"
}

const generarJuego = () => {
    const colorApuesta = document.getElementById('colorEscogido').value; //obtiene el color apostado
    const nombrejugador = document.getElementById('nombre').value //obtiene el nombre del jugador
    

    const color = generarColor(); //llama a la funcion que genera el color
    const montoApuesta = generarMonto(); //llama a la funcion que genera el monto del valor apostado
    const pagoTotal = calcularPagoTotal(color, colorApuesta, montoApuesta.montoApuesta, montoApuesta.dineroRestante); //llama a la funcion que calcula el pago total
    
    document.getElementById('colorapostado').innerHTML=colorApuesta; //muestra el color apostado en el Html
    document.getElementById('montoapostado').innerHTML=montoApuesta.montoApuesta; //muestra el monto apostado en el Html
    document.getElementById('color').innerHTML=color; //muestra el color generado en el Html
    document.getElementById('nombrejugador').innerHTML=nombrejugador; //muestra el nombre del jugador en el Html
    document.getElementById('ganastes').innerHTML=pagoTotal.dinero; //muestra el monto ganado en el Html
    document.getElementById('texto').innerHTML=pagoTotal.texto; //muestra el texto "Gano o perdio" en el Html
    document.getElementById('dinerofinal').innerHTML=pagoTotal.dineroFinal; //muestra el dinero final en el Html
       
}
/*Esta Funcion genera cuanto es el monto a apostar
Si el usuario tiene dinero mayor a 1000, se genera un numero aleatorio entre 8% y 15% para ser apostado y
por ultimo se descuenta del dinero inicial.
Si el dinero inicial es mayor o igual a 1 y menor o igual a 1000, el jugador apuesta todo el dinero.
Si no tiene dinero, el jugador no puede apostar.
*/
const generarMonto = () => {
    var montoApuesta;
    var dineroRestante;
    const dineroInicial = document.getElementById('dineroinicial').value 
    
    if (dineroInicial > 1000){ 
      const porcentaje = (Math.random() * (0.07) + 0.08).toFixed(2); 
      
      
      montoApuesta = (dineroInicial * porcentaje).toFixed(2); 
      dineroRestante = dineroInicial - montoApuesta; 
      console.log("dineroRestante: ", dineroRestante);
      return {montoApuesta, dineroRestante};
    }
    else if ( dineroInicial >= 1 && dineroInicial <= 1000){ 
      montoApuesta = dineroInicial;
      dineroRestante = dineroInicial - montoApuesta;
      return {montoApuesta, dineroRestante};
    }
    else   
    montoApuesta = 0;
    dineroRestante = 0; 
    return {montoApuesta, dineroRestante};
  
}
/*Funcion que calcula el dinero ganado
Si el color apostado es rojo o negro y acierta, gana el doble
Si el color apostado es verde y acierta, gana el 15%
Si el jugador no acierta, no obtiene ninguna ganancia.
Y por ultimo se le suma al dinero que tenga
*/
const calcularPagoTotal = (color, colorApuesta, montoApuesta, dineroRestante) => { 
      var texto; 
      var dinero; 
      var dineroFinal; 
      
  if  (colorApuesta === color && (color==="Rojo" || colorApuesta === "Negro")){ 
        
        texto = "Ganastes el doble";  
        dinero = montoApuesta * 2;
        dineroFinal = dineroRestante + dinero;
        return {dinero, texto, dineroFinal};
  }
  else if (colorApuesta === color && colorApuesta === "Verde"){ 
        
        texto = "Ganastes el 15%";
        dinero = montoApuesta * 15;
        dineroFinal = dineroRestante + dinero;
        return {dinero, texto, dineroFinal}
  }
  else{
        
        texto = "Perdistes";
        dinero = 0;
        dineroFinal = dineroRestante + dinero;
        return {dinero, texto, dineroFinal}
  }
}
 

  return (

  <div>
      
      <Cabecera /> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
        
               
        <label className="form-label">Resultado de la Ruleta</label>
        <div className="text-center"></div> 
        <h3><span id="color"> </span></h3>
             
        <label className="form-label">Nombre Completo:</label> 
        <div className="text-center"></div> 
        <input type="string" id="nombre" className="form-sign" placeholder="Ingresa tu nombre" required />
        <br />      
        <label className="form-label">Dinero Inicial:</label>
        <div className="text-center"></div>
        <input type="number" id="dineroinicial" className="form-sign" placeholder="Ingresa tu dinero" required />  
        
        <br />      
        <label className="form-label">Color a apostar:</label>
        <div className="text-center"></div> 
        <select className="form-sign" id="colorEscogido" required>
                  <option selected disabled value="">Escoja un color...</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Negro">Negro</option>
                  <option value="Verde">Verde</option>
        </select>  
        <br />      
        <label className="form-label">Ganastes:</label> 
        <div className="text-center"></div>
        <span id="ganastes"> </span>   
        <br />
        <label className="form-label">Dinero final:</label>
        <div className="text-center"></div>
        <span id="dinerofinal"> </span>
        <br />
        <br />
        <button className="btn btn-danger mx-auto " type="button" onClick={generarJuego}>A Jugar!</button>
        
        <br />
        <br />
        <strong><span id="nombrejugador"> </span></strong> apostastes $ <span id="montoapostado">  </span> al color: <span id="colorapostado"> </span><span id=""> </span>
        <br />
        Resultado: <span id="texto"> </span> 
      </div>  
      
      
    <Pie />
    </div>
  )
}

export default Jugar

