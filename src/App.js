import React,{useState,useEffect}from 'react';
import Formulario from './components/Formulario'
import Login from './components/Login' 
import Loading from './components/Loading'
import Home from './components/Inicio';
import PanelTareas from './components/panelTareas'
/* componentes externos */

  /* router */
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    console.log('useEffect')
    setTimeout(()=>{
      setLoading(false)
    },2000)
  })

  return (
    
      loading 
        ?<Loading/> 
        : 
            <div className="container mt-5">
              <h2 className="navbar-title">Bienvenido</h2>
              <div className="btn btn-group">
                <Link to="/Formulario" className="btn-dark">
                  Registro
                </Link>
              </div>
              <div className="btn btn-group">
                <Link to="/Login" className="btn-dark">
                  Inicio de Sesion
                </Link>
              </div>
              <Link to="/panelTareas" className="btn-dark">
                  Panel de Tareas
                </Link>
              <div className="btn btn-group">
                <Link to="/" className="btn-dark">
                  Inicio
                </Link>
              </div>
              <hr/>
                <Switch>
                    <Route path="/" exact> 
                      <Home />
                    </Route>
                    <Route path="/Formulario"> 
                      <Formulario />
                    </Route>
                    <Route path="/Login"> 
                      <Login />
                    </Route>
                    <Route path="/panelTareas"> 
                      <PanelTareas />
                    </Route>
                </Switch>
           </div>
      ) 
}

export default App;