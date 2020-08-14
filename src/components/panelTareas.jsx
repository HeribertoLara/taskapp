import React,{Fragment} from 'react';
import "./Formulario.css"
import Task from "./Tasks"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons';

const PanelTareas= ()=>{


    return( 
        <Fragment>
            <div className="container">
           {/*  <ToastContainer  /> */}
            <form  className="formulario" >
            <h1> Panel de Tareas </h1>
                    <div>
                    <FontAwesomeIcon icon={faTasks} className="icon"  />
                        <input 
                            className="form-control" 
                            placeholder="Tarea" 
                            type="text"
                            name="task"/>
                    </div>
                    <div>
                    <input  
                            className="form-control"
                            placeholder="Fecha" 
                            type="date"
                            name="date"/>
                </div>
        
                <div className= "form-group">
                    <button className="button" type="submit">AGREGAR TAREA</button>
                </div> 
            </form>
            <div >    
                <Task/>
            </div>
            </div>
        </Fragment>
    );
}
    
export default PanelTareas;