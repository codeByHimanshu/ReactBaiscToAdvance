import React from 'react';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import Counter from './components/Counter';
import Todo from './components/Todo';



const App = () => {
  return (

      <BrowserRouter>

      <Routes>
        <Route path ='/counter' element = {<Counter/>} />
        <Route path ='/todos' element = {<Todo/>} />
      </Routes>

      </BrowserRouter>
  
  );
}

export default App;
