// imported react and hooks
import React, { useState } from 'react';

const App = () => {

  // initialized todos array to store all todo
  const [ todos, setTodos ] = useState([]);

  // initialized to store value for new single todo input
  const [ newTodo, setNewTodo ] = useState("");

  // function to add new todo in the existing todos array and also clearing input value after adding new todo
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    clearTodo();
  }

  // function to clearing todo value from input
  const clearTodo = () => {
    setNewTodo("");
  }

  return (
    <div>
      {/* /input for new todo */}
      {/* newTodo value for single todo input */}
      {/* calling setNewTodo function to set the new todo value */}
      <input type="text" placeholder="Add new Todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} id='newTodo'/>
      {/* to call cleartodo function */}
      <button type="button" onClick={clearTodo}>Clear all</button>
      {/* to call addtodo function */}
      <button type="button" onClick={addTodo}>Add</button>
      {/* we are using map function to render todos */}
      {
        todos.map((todos, i) => (
          <li key={i}>{todos}</li>
        ))
      }
    </div>  
  );
};

// exporting App.js
export default App;