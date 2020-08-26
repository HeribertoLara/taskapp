import React,{Fragment, useState, useEffect} from 'react';
import "./Formulario.css"
import Task from "./Tasks"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

const PanelTareas= ()=>{
    const [data, setData] = useState({
        content: "",
        date: "",
    })

    const handleInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    // useEffect(()=>{
    //     console.log('useEffectPanelTareas')
    //     enviarData()
    // }, [])

    const enviarData = async (event)=>{
        event.preventDefault()
        console.log(data.content + ' '+ data.date)
        let url="https://academlo-todolist.herokuapp.com/tasks"
        let res= await Axios.post(url,data)
        console.log(res)
    }

    return( 
        <Fragment>
            <div className="container">
           {/*  <ToastContainer  /> */}
            <form onSubmit={enviarData} className="formulario" >
            <h1> Panel de Tareas </h1>
                    <div>
                    <FontAwesomeIcon icon={faTasks} className="icon"  />
                        <input 
                            className="form-control" 
                            placeholder="Tarea" 
                            type="text"
                            name="content"
                            onChange={handleInputChange}/>
                    </div>
                    <div>
                    <input  
                            className="form-control"
                            placeholder="Fecha" 
                            type="date"
                            name="date"
                            onChange={handleInputChange}/>
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