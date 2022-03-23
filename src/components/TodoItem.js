import React from "react";
import '../css/TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'


function TodoItem(props){
  


  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && `Icon-check--active`}`}
        onClick={props.onComplete}
      > 
        { props.completed ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} />}
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        { props.text }
        <i className="fas-regular fa-circle-minus"></i> 
      </p>
      <span 
        className="Icon Icon-delete" 
        onClick={props.onDelete}
      > 
        <FontAwesomeIcon icon={faCircleMinus} />
      </span>
    </li>
      
  );
}

export { TodoItem }