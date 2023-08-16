import API from "./api";

const App = () => {
    // пробуем вывести в консоль ответ с api
    API.todos.fetchAll().then((todosData) => console.log(todosData));

    return <div className="App">{<h1>App test - content</h1>}</div>;
};

export default App;
