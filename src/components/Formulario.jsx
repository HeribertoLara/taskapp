import React, {Fragment, useState} from "react";
import "./Formulario.css"
/* components extern  */
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'

const Formulario = () => {
    
    const [datos, setDatos]= useState({
        name:'',
        lastname:'',
        email:'',
        password:'',
    })
    
    const handleInputChange = (event)=>{
       /*  console.log(event.target.value) */
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
    }
    const enviarDatos= async (event)=>{
        event.preventDefault();
        console.log(datos.nombre + ' '+ datos.apellido+' '+datos.email+ ' ' + datos.password)
        let url= "https://academlo-todolist.herokuapp.com/register"
        let respuesta = await axios.post(url, datos)
        console.log(respuesta)
    
    }
    return (
        <Fragment>
            <div className="container">
            <form onSubmit={enviarDatos} className="formulario" >
            <h1>Registro </h1>
               <div >
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input 
                    className="form-control" 
                    placeholder="Nombre" 
                    type="text"
                    name="name"
                    onChange={handleInputChange}/>
                    
               </div>
               <div>        
               <FontAwesomeIcon icon={faUser} className="icon" />
                <input  
                    className="form-control"
                    placeholder="Apellidos" 
                    type="text"
                    name="lastname"
                    onChange={handleInputChange}/>
               </div>
               <div>
               <FontAwesomeIcon icon={faEnvelope} className="icon"  />
                <input  
                    className="form-control"
                    placeholder="Email" 
                    type="email"
                    name="email"
                    onChange={handleInputChange}/>
               </div>
                <div>
                <FontAwesomeIcon icon={faKey}  className="icon" />
                <input  className="form-control"
                        placeholder="Contraseña" 
                        type="password"
                        name="password"
                        onChange={handleInputChange}/>
               </div>
               <div className= "form-group">
                <button className="button" type="submit">Registrarse</button>
               </div> 
               <p>Al registrarte aceptas nuestas Condiciones y Politicas de uso</p>
            </form>
            </div>
    <h4>* {datos.nombre}- {datos.apellido} {datos.email}{datos.password}</h4>
        </Fragment>
    );
}
export default Formulario;