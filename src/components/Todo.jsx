import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([
    {
      title: "conding Task",
      description: "i will code for three hours continuously",
      timing: "3-9 hours",
    },
    {
      title: "go to bar",
      description: "i will go to bar and have beer",
      timing: "3-9 pack",
    },
  ]);
  function AddTodo() {
    setTodo([...todo,{
      title: "go to job",
      description: "i will go to office",
      timing: "3-9 ",
    }])
    
  }

  return (
    <div>
        <button onClick={AddTodo}>add a random todo</button>
      {todo.map(function(todo) {
        return <CustomTodo title={todo.title} description={todo.description} timing={todo.timing} />
      })}
    </div>
  );

  function CustomTodo(props) {
    return (
      <ul>
          <li>title: {props.title}</li>
          <li>description: {props.description}</li>
          <li>timing: {props.timing}</li>
      </ul>
    );
  }


};
export default Todo;
