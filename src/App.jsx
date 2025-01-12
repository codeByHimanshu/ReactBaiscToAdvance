import React from 'react';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import Counter from './components/counter';



const App = () => {
  return (

      <BrowserRouter>

      <Routes>
        <Route path ='/counter' element = {<Counter/>} />
      </Routes>

      </BrowserRouter>
  
  );
}

export default App;
