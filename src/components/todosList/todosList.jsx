import PropTypes from "prop-types";
import TodoItem from "../todoItem/todoItem";

const TodosList = ({ todos }) => {
    return (
        <div className="container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodosList;
