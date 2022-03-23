import React from "react";
import '../css/CreateTodoButton.css';

function CreateTodoButton(props){
  const onClickHandle = () => {
    props.setOpenModal(true)
  };

  return (
      <button 
        className="CreateTodoButton"
        onClick={ onClickHandle }
      >+</button>
  );
}

export {CreateTodoButton}