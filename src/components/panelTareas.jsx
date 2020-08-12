import React,{useState,Fragment} from 'react';
import "./Formulario.css"

const PanelTareas= ()=>{
    
    const[tarea, setTarea]=useState({
        content:'',
        date:'',
        userId:'',
    })
    const handleInputChange= (event)=>{
        setTarea({
            ...tarea,
            [event.target.name] : event.target.value

        })
    }
    const enviarTarea= async(event)=>{
        event.preventDefault();

    }

    return(
        
        <Fragment>
            <h2>PANEL DE TAAREAS</h2>
            <div className="container">
           {/*  <ToastContainer  /> */}
            <form onSubmit={enviarTarea} className="formulario" >
            <h1>Inicio de sesion </h1>
                    <div>
                        <input  
                            placeholder="Tarea" 
                            type="text"
                            name="task"
                            onChange={handleInputChange}/>
                    </div>
                    <div>
                    <input  
                            placeholder="Fecha" 
                            type="date"
                            name="date"
                            onChange={handleInputChange}/>
                </div>
        
                <div className= "form-group">
                    <button className="button" type="submit" /* onClick={verification} */>Iniciar sesion</button>
                </div> 
            </form>
            </div>
        </Fragment>
    );
}
    
export default PanelTareas;