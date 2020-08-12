import React,{Fragment} from 'react';
import  {PacmanLoader} from 'react-spinners'
import "./Formulario.css"

const Loading = () =>{

    return(
        <Fragment>
            <div>
                <div className="loading">
                        <PacmanLoader color="rgb(228, 208, 35)" />
                        <div>
                            <h3 className="t-loading">CARGANDO</h3>
                        </div>
                </div>
                
            </div> 
        </Fragment>
    )
}
export default Loading; 