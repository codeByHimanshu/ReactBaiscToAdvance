import { useState } from "react";
export default function TodoApp() {
    let counter = 4;
  const [todos, setTodos] = useState([
    {
        id:1,
      title: "gym",
      description: "good for health",
    },
    {
        id:2,
      title: "code",
      description: "gives you money",
    },
    {
        id:3,
      title: "colleg",
      description: "takes all your money",
    },
    {
        id:4,
      title: "learnig",
      description: "improves your knowledge",
    },
    {
        id:5,
      title: "healthy food",
      description: "good for health",
    },
  ]);

  function AddTodo() {
    setTodos([...todos, {
        id:counter++,
      title:Math.random(),
      description: Math.random(),
    }]);
  }

  
return (
  <>
 
  <button onClick={AddTodo}>addTodo</button>
    {todos.map((todo) => (
        <CustomTodo key={todo.id} title={todo.title} description={todo.description} />     
    ))}
  </>
)

 function CustomTodo(props) {
    return <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
 }

}

