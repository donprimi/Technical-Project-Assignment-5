import React, { useState } from "react";
import { connect } from "react-redux";
import {addTodos,completeTodos,deleteTodos,editTodos} from "../redux/reducer";
import TodoItem from "./TodoItem";

const inputMap = (state) => {
  return {
    todos: state,
  };
};

const todoMap = (dispatch) => {
  return {
    addTodo: (obj) => 
    dispatch(addTodos(obj)),
    deleteTodo: (id) => 
    dispatch(deleteTodos(id)),
    editTodo: (obj) => 
    dispatch(editTodos(obj)),
    completeTodo: (id) => 
    dispatch(completeTodos(id)),
  };
};

const TodoLists = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("all")}>
          All
        </button>

        <button onClick={() => setSort("active")}>
          Active
        </button>

        <button onClick={() => setSort("completed")}>
          Completed
        </button>
        
      </div>

      <ul>
        <div className="cards">
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      id={item.id}
                      item={item}
                      deleteTodo={props.deleteTodo}
                      editTodo={props.editTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      id={item.id}
                      item={item}
                      deleteTodo={props.deleteTodo}
                      editTodo={props.editTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    id={item.id}
                    item={item}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </div>
      </ul>
    </div>
  );
};

export default connect(inputMap, todoMap)(TodoLists);