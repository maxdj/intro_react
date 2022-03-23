import React from "react";
import '../css/TodoCounter.css';
import { TodoContext } from "../TodoContext";


function TodoCounter(){
    const {totalToDos, completedToDos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedToDos} de {totalToDos} ToDo's</h2>
    );
}

export { TodoCounter };