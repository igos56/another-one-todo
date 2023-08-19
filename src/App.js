import { useEffect, useState } from "react";
import API from "./api";
import TodosList from "./components/todosList/todosList";
import Loader from "./components/loader/loader";
import ModalTaskAdd from "./components/modalTaskAdd/modalTaskAdd";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        API.todos.fetchAll().then((todos) => setTodos(todos));
    }, []);

    const handleTodoItemDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div
            className={
                "App d-flex flex-column align-items-center justify-content-center" +
                (isModalOpen ? " modal-open" : "")
            }
        >
            <ModalTaskAdd
                isModalOpen={isModalOpen}
                onModalClose={handleToggleModal}
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
    );
};

export default App;
