import './App.css';
import BookLIst from './components/BookList/BookLIst';
import User from './components/Users/User';
import Todo from './components/ToDos/Todo';

function App() {
  return (
    <div className="App">
      
      <BookLIst/>
      <User/>
      <Todo/>
    </div>
  );
}

export default App;
