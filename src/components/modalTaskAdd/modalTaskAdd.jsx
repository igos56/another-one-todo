import PropTypes from "prop-types";

const ModalTaskAdd = ({
    isModalOpen,
    onCreateTodo,
    currentInputTitle,
    currentInputContent,
    onInputTitleChange,
    onInputContentChange
}) => {
    return (
        <div
            className={
                "position-absolute" +
                (isModalOpen
                    ? " d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 bg-secondary z-1 bg-opacity-75"
                    : " invisible")
            }
        >
            <form className="border w-75 p-3 bg-white">
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">
                        Кратко о задаче:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="todoTitle"
                        value={currentInputTitle}
                        onChange={(event) => onInputTitleChange(event)}
                        placeholder="Что нужно сделать?"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoContent" className="form-label">
                        Подробное описание задачи:
                    </label>
                    <textarea
                        className="form-control"
                        id="todoContent"
                        rows="3"
                        value={currentInputContent}
                        placeholder="Какие шаги нужно выполнить на пути к выполнению?"
                        onChange={(event) => onInputContentChange(event)}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onCreateTodo}
                >
                    Создать задачу
                </button>
            </form>
        </div>
    );
};

ModalTaskAdd.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onCreateTodo: PropTypes.func.isRequired,
    currentInputTitle: PropTypes.string.isRequired,
    currentInputContent: PropTypes.string.isRequired,
    onInputTitleChange: PropTypes.func.isRequired,
    onInputContentChange: PropTypes.func.isRequired
};

export default ModalTaskAdd;
