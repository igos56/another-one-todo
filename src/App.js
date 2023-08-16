import { useEffect, useState } from "react";
import API from "./api";
import TodosList from "./components/todosList/todosList";

const App = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        API.todos.fetchAll().then((todos) => setTodos(todos));
    }, []);

    return <div className="App">{todos && <TodosList todos={todos} />}</div>;
};

export default App;
