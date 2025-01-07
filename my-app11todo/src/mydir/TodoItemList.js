import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({todos, onToggle, onRemove}) => {
    // return ( 
    //     <div>
    //         <TodoItem text="안녕"/>
    //         <TodoItem text="친구야"/>
    //         <TodoItem text="리액트다"/>
    //     </div>
    // );
    console.log(todos);
    const TodoList = todos.map((todo) => (
        <TodoItem
            {...todo}
            onToggle={onToggle} 
            onRemove={onRemove}
            key={todo.id}
        />
    ));
    return <div>{TodoList}</div>
};
export default TodoItemList;