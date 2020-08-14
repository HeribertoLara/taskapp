import React, {Fragment, useState} from "react";
import "./Formulario.css"
/* components extern  */
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'
/* Tostify */
import{ toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// router
  /* router */
  import {useHistory} from "react-router-dom";

toast.configure()
const Login = () => {

    const [datos, setDatos]= useState({
        email:'',
        password:'',
    })
    const [message, setMessage]= useState('')

    const history= useHistory();

    const handleInputChange = (event)=>{
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
    }
    const enviarDatos= async (event)=>{
       try{
        event.preventDefault();
        console.log(datos.email+ ' ' + datos.password)
        let url= "https://academlo-todolist.herokuapp.com/login"
        let respuesta = await axios.post(url, datos)
        console.log(respuesta.status)
        setMessage(respuesta.data.results)
        console.log(message)
// si  el respuesta.status es =200 entonces  aparecera una notificacion y redireccionara a otra pagina
        if (respuesta.status===200){
            notifyLogin()
            history.push('/panelTareas')
        } 
        }  
        catch{
            notifyError()
        }    
    }
    const notifyLogin= ()=>{
        toast.info('Credenciles correctas bienvenido')
    }
    const notifyError= ()=>{
        toast.error('e-mail o contraseña incorrectos')
    }
   
    
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
                    <button className="button" type="submit" >INICIO DE SESION</button>
                </div> 
            </form>
            </div>
            <h4>*{datos.email}{datos.password}</h4>
        </Fragment>
    );
}

export default Login;