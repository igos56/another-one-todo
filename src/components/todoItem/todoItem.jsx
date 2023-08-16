import PropTypes from "prop-types";

const TodoItem = ({ title, content }) => {
    return (
        <div className="card m-2">
            <div className="card-header">Неотложное дело:</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <button className="btn btn-danger">Удалить</button>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired
};

export default TodoItem;
