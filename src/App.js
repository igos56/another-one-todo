import API from "./api";
import TodosList from "./components/todosList/todosList";

const App = () => {
    // пробуем вывести в консоль ответ с api
    API.todos.fetchAll().then((todosData) => console.log(todosData));

    return (
        <div className="App">
            <TodosList />
        </div>
    );
};

export default App;
