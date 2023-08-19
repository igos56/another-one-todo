import PropTypes from "prop-types";

const TodoItem = ({ id, title, content, onTodoItemDelete }) => {
    return (
        <div className="card m-2">
            <div className="card-header">Неотложное дело:</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => onTodoItemDelete(id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    onTodoItemDelete: PropTypes.func.isRequired
};

export default TodoItem;
