import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";


const inputMap = (state) => {
  return {
    todos: state
  };
};

const todoMap = (dispatch) => {
  return {
    addTodo: (obj) => 
    dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // cpnst [id, setId] = useState(0);

  const id = new Date().getMilliseconds();
  
  const add = () => {

    if (todo === "") {
    } else {
      props.addTodo({
        id: id ,
        // id: setId (id + 1),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  
  return (
    <div className="addTodos">
      <input
        type="text"
        placeholder ="What to do"
        onChange={(e) => handleChange(e)}
        className="input-todo"
        value={todo}
      />

      <button onClick={() => add()} className="add-button">
        Add
      </button>
      <br />
    </div>
  );
};

export default connect(inputMap, todoMap)(Todos);