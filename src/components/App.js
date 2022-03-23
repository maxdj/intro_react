import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "../ui/App";

// const defaultToDos = [
//   { id: 0, text: 'Tomar curso', completed: false },
//   { id: 1, text: 'Comprar leche', completed: false },
//   { id: 2, text: 'Llorar con la llorona', completed: false },
//   { id: 3, text: 'Callar a los chamacos :-)', completed: false },
// ]

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
