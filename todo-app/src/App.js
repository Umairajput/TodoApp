import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoLists } from './component/TodoLists';
import { AddTodo } from './component/AddTodo';

function App() {
  return (
      <div className="container p-4 mt-2">
        <h2 style={{textAlign:'center'}}>Todo App</h2>
        <AddTodo/>
        <TodoLists/>
      </div>
      );
}

      export default App;
