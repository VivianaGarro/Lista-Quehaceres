import { useState } from "react";

const Form = (props) =>{
    // Desestructurar props
    const { list, setList } = props;
    // Propiedad de la tarea
    const [ title, setTitle ] = useState("");
    const [ status, setStatus] = useState(false);
    // Método para añadir tarea
    const addTask = (e) =>{
        e.preventDefault();
        // Si la tarea viene vacia
        if(title.length === 0){
            return;
        }
        const newTask = {
            title, status
        }
        setList([...list, newTask]);
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <label>Nueva Tarea</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <input type="submit" value={"Añadir tarea"} />
            </form>
        </div>
    )
}

export default Form;