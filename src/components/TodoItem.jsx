import React, { useRef } from "react";
import { RiEdit2Fill, RiDeleteBinFill } from "react-icons/ri";



const TodoItem = (props) => {
  const { item, editTodo, deleteTodo } = props;

  const inputTodo = useRef(true);

  const changeFocus = () => {
    inputTodo.current.disabled = false;
    inputTodo.current.focus();
  };

  const edit = (id, value, e) => {
    if (e.which === 1) {
      editTodo({ id, item: value });
      inputTodo.current.disabled = true;
    }
  };
  return (
    <div className="card">
      <input type="checkbox" className="cbx"/>
      <input
        ref={inputTodo}
        disabled={inputTodo}
        defaultValue={item.item}
        onKeyPress={(e) => edit(item.id, inputTodo.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          {" "}
          <RiEdit2Fill/>{" "}
        </button>

        {/* {item.completed === false && (
          defaultchecked= completeTodo(item.id)
        )} */}

        <button onClick={() => deleteTodo(item.id)}>
          {" "}
          <RiDeleteBinFill/>
        </button>{" "}
      </div>

    </div>
  );
};

export default TodoItem;