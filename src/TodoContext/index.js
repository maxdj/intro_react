import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: ToDos,
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedToDos = ToDos.filter(ToDo => ToDo.completed === true).length;
    
    const totalToDos = ToDos.length;
    

    let searchedTodos = [];

    if(!searchValue.length >= 1){
    searchedTodos = ToDos;
    } else{
    searchedTodos = ToDos.filter(ToDo => {
        const todoText = ToDo.text.toLowerCase();
        const inputValue = searchValue.toLocaleLowerCase();
        return todoText.includes(inputValue);
        
    });
    }
    const completeToDo = (id) => {
        const todoIdx = ToDos.findIndex(todo => todo.id === id);
        const newToDos = [...ToDos];

        newToDos[todoIdx].completed =  !newToDos[todoIdx].completed;
        saveToDos(newToDos);
    }

    const deleteToDo = (id) => {
        const todoIdx = ToDos.findIndex(todo => todo.id === id);
        const newToDos = [...ToDos];

        newToDos.splice(todoIdx,1);
        saveToDos(newToDos);
    }
    const addTodo = (text) => {
        const newToDos = [...ToDos];
        const idTodo = newToDos.length+1;

        newToDos.push({
            id: idTodo,
            completed: false,
            text: text,
        });
        saveToDos(newToDos);
    }
    
      // console.log('render (antes del use effect)');
      // React.useEffect(() => {
      //   console.log('use effect');
      // }, [totalToDos]);
      // console.log('render (despues del use effect)')
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeToDo,
            addTodo,
            deleteToDo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};