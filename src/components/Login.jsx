import React, {Fragment, useState,useEffect} from "react";

import "./Formulario.css"
/* components extern  */
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'
/* Tostify */
/* import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 */
/* import { Redirect } from "react-router-dom"; */
const Login = () => {
    
  /*   const notify= () => toast('Prueba Tostify') */

    const [datos, setDatos]= useState({
        email:'',
        password:'',
    })
    const [message, setMessage]= useState('')

    const handleInputChange = (event)=>{
       /*  console.log(event.target.value) */
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
    }
    const enviarDatos= async (event)=>{
        event.preventDefault();
        console.log(datos.email+ ' ' + datos.password)
        let url= "https://academlo-todolist.herokuapp.com/login"
        let respuesta = await axios.post(url, datos)
        console.log(respuesta)
        setMessage(respuesta.data.results)
        console.log(message)
    }
        /* if (Login===true){
            console.log(setLogin)
            return(
            <Redirect to="./panelTareas"/>
           )          
        } */
    
    return (
        <Fragment>
            <div className="container">
           {/*  <ToastContainer  /> */}
            <form onSubmit={enviarDatos} className="formulario" >
            <h1>Inicio de sesion </h1>
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
                    <button className="button" type="submit" /* onClick={verification} */>Programar Tarea</button>
                </div> 
            </form>
            </div>
            <h4>*{datos.email}{datos.password}</h4>
        </Fragment>
    );
}

export default Login;