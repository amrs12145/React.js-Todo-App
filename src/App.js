import './App.css';
import Todo from './components/Todo.js';

function App() {

  return (

    <div>

      <h1>My To-do</h1>

      <Todo title="Learn react"/>
      <Todo title="Master react"/>
      <Todo title="Explore react"/>
      <Todo/>

    </div>



  );
}

export default App;
