import React,{Fragment,useState, useEffect} from 'react';
import axios from 'axios';


const Tasks = ()=>{
    
    const [tasks, setTasks] = useState([])
    /* estado para borrar trea */
    const [del, setDel] = useState('')

    useEffect(() => {
        tareas()
    },[])

    const tareas = async (tasks)=>{
        try{
            const resTask= await axios.get('https://academlo-todolist.herokuapp.com/tasks')
            console.log(resTask.data)
            setTasks(resTask.data.results)
                
        }catch (error){
            console.log(error)
        }
    }

    const deleteTask= async(del)=>{
            try{
                const resDel= await axios.delete('https://academlo-todolist.herokuapp.com/tasks/${_id}')
                console.log(resDel)
                setDel(resDel)
                    
            }catch (error){
                console.log(error)
            }
        } 

    return(
        <Fragment>
            <div className="container-card">
                {tasks.map((task,key)=>
                <div className="card-task" key={task._id}>
                   <div>{task._id}</div>
                   <div>{task.content}</div>
                    <div>{task.date} </div>
                    <div>
                        <button className="button-task">Modificar</button> 
                        <button className="button-task" onClick={deleteTask}>Modificar</button> 
                    </div>
                </div>        
            )}
            </div>
        </Fragment>
    )

}
export default Tasks;