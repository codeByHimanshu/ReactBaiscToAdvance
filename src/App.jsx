import React from 'react';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import Counter from './components/Counter';
import Todo from './components/Todo';
import Rerender from './components/Rerender';
import TodoApp from './TodoApp/TodoApp';
import InputSum from './useMemo/InputSum';



const App = () => {
  return (

      <BrowserRouter>

      <Routes>
        <Route path ='/counter' element = {<Counter/>} />
        <Route path ='/todos' element = {<Todo/>} />
        <Route path ='/rerender' element = {<Rerender/>} />
        <Route path ='/todoapp' element = {<TodoApp/>} />
        <Route path ='/inputsum' element = {<InputSum/>} />
      </Routes>

      </BrowserRouter>
  
  );
}

export default App;
