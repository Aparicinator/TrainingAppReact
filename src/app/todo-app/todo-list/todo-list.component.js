import React from "react";

const TodoList = ({ todoList, toggleTodo }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo({ index: i, value });
    }

    return (
        <div>
            <ul>
                {todoList.map((obj, i) => (
                    <li key={i}>
                        <input
                            name={i}
                            type="checkbox"
                            checked={obj.done}
                            onChange={e => handleToDoCheckBoxChange(e, i)}
                        />
                        {obj.name}
                    </li>)
                )}
            </ul>
            <hr />
            <h2>Debug Stuff</h2>
            <pre>{JSON.stringify(todoList, null, 2)}</pre>
        </div>
    )
};

export default TodoList;