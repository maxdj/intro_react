import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";


function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeToDo, 
    deleteToDo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
        <TodoList>
          { error && <p>Error al cargar</p> }
          { loading && <p>Cargando....</p> }
          { (!loading && ! searchedTodos.length) && <p>Crea tu primer ToDo!!!</p> }
          {searchedTodos.map(toDo => (
            <TodoItem 
              key={toDo.id} 
              text={toDo.text} 
              completed = {toDo.completed}
              onComplete = {() => completeToDo(toDo.id)}
              onDelete = {() => deleteToDo(toDo.id)}
            />
          ))}
          
        </TodoList>
        {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
        )}
      
      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />
    
    </React.Fragment>);

}

export {AppUI}
