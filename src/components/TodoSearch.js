import React from "react";
import '../css/TodoSearch.css';
import { TodoContext } from "../TodoContext";




function TodoSearch(){

  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onChange = (e) =>{
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  return(
    <input 
      className="TodoSearch" 
      placeholder="Buscar..."
      onChange={onChange}
    />
  );
}

export { TodoSearch };