import PropTypes from "prop-types";
import TodoItem from "../todoItem/todoItem";

const TodosList = ({ todos, onTodoItemDelete, onModalOpen }) => {
    return (
        <div className="container">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onModalOpen}
            >
                Добавить задачу
            </button>
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
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTodoItemDelete: PropTypes.func.isRequired,
    onModalOpen: PropTypes.func.isRequired
};

export default TodosList;
