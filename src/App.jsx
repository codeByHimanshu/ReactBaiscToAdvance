import React from 'react';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import Counter from './components/Counter';
import Todo from './components/Todo';
import Rerender from './components/Rerender';
import TodoApp from './TodoApp/TodoApp';
import InputSum from './useMemo/InputSum';
import UseCallBack from './useCallback/UseCallBack';
import Bankdata from './AllHooks/Bankdata';
import Assignment1 from './Assignment(week 6)/Assginment1';
import Assignment2 from './Assignment(week 6)/Assignment2';
import Assignment3 from './Assignment(week 6)/Assignment3';



const App = () => {
  return (

      <BrowserRouter>

      <Routes>
        <Route path ='/counter' element = {<Counter/>} />
        <Route path ='/todos' element = {<Todo/>} />
        <Route path ='/rerender' element = {<Rerender/>} />
        <Route path ='/todoapp' element = {<TodoApp/>} />
        <Route path ='/inputsum' element = {<InputSum/>} />
        <Route path ='/usecall' element = {<UseCallBack/>} />
        <Route path ='/bank' element = {<Bankdata/>} />
        <Route path ='/assign1' element = {<Assignment1/>} />
        <Route path ='/assign2' element = {<Assignment2/>} />
        <Route path ='/assign3' element = {<Assignment3/>} />
      </Routes>

      </BrowserRouter>
  
  );
}

export default App;
