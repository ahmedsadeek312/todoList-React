import "./App.css";
import AddToDo from "./component/AddToDo";
import ToDoList from "./component/ToDoList";

function App() {
  return (
    <>
      <div>
        <div className="logo">
          <h1> TODO List</h1>
        </div>
        <div className="head-logo">
          <AddToDo />
        </div>
        <div className="addedTasks">
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
