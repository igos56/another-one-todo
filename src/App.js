import { useEffect, useState } from "react";
import API from "./api";
import generateId from "./utils/generateId";
import TodosList from "./components/todosList/todosList";
import Loader from "./components/loader/loader";
import ModalTaskAdd from "./components/modalTaskAdd/modalTaskAdd";
import SearchInfoBar from "./components/searchInfoBar/searchInfoBar";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentInputTitle, setCurrentInputTitle] = useState("");
    const [currentInputContent, setCurrentInputContent] = useState("");

    useEffect(() => {
        API.todos.fetchAll().then((todos) => setTodos(todos));
    }, []);

    const handleTodoItemDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggleModal = () => setIsModalOpen(!isModalOpen);

    const handleInputTitleChange = (event) => {
        setCurrentInputTitle(event.target.value);
    };
    const handleInputContentChange = (event) => {
        setCurrentInputContent(event.target.value);
    };

    const handleCreateTodo = () => {
        const newTodoItem = {
            id: generateId(),
            title: currentInputTitle,
            content: currentInputContent
        };

        setTodos([...todos, newTodoItem]);
        setCurrentInputTitle("");
        setCurrentInputContent("");
        handleToggleModal();
    };

    const todosCount = todos ? todos.length : 0;

    return (
        <div className={"App" + (isModalOpen ? " modal-open" : "")}>
            <div className="container">
                <SearchInfoBar count={todosCount} />
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <ModalTaskAdd
                        isModalOpen={isModalOpen}
                        onCreateTodo={handleCreateTodo}
                        currentInputTitle={currentInputTitle}
                        currentInputContent={currentInputContent}
                        onInputTitleChange={handleInputTitleChange}
                        onInputContentChange={handleInputContentChange}
                    />
                    {todos ? (
                        <TodosList
                            todos={todos}
                            onTodoItemDelete={handleTodoItemDelete}
                            onModalOpen={handleToggleModal}
                        />
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
