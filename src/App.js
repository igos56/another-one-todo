import { useEffect, useState } from "react";
import API from "./api";
import TodosList from "./components/todosList/todosList";
import Loader from "./components/loader/loader";

const App = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        API.todos.fetchAll().then((todos) => setTodos(todos));
    }, []);

    const handleTodoItemDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App d-flex justify-content-center">
            {todos ? (
                <TodosList
                    todos={todos}
                    onTodoItemDelete={handleTodoItemDelete}
                />
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default App;
