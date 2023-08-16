import TodoItem from "../todoItem/todoItem";

const TodosList = ({ todos }) => {
    console.log(todos);
    return (
        <div className="container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodosList;
