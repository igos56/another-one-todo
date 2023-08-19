import PropTypes from "prop-types";
import TodoItem from "../todoItem/todoItem";

const TodosList = ({ todos, onTodoItemDelete }) => {
    return (
        <div className="container">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onTodoItemDelete={onTodoItemDelete}
                />
            ))}
        </div>
    );
};

TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodosList;
