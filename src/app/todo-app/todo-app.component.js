import React from "react";

import TodoList from './todo-list';
import TodoAdder from './todo-adder';

const TodoApp = () => (
    <div>
        <h1>ToDo works!</h1>
        <div className="row">
            <div className="col-6">
                <TodoAdder />
            </div>
            <div className="col-6">
                <TodoList />
            </div>
        </div>
    </div>
);

export default TodoApp;