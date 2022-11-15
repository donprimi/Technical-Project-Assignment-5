import Todolists from "./components/TodoLists";
import Todos from "./components/Todos";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="header"> What's the plan for today? </h1>
      <div>
        <Todos />
        <Todolists />
      </div>
    </div>
  );
}

export default App
