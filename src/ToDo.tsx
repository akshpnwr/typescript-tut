import React, { useRef, useState } from "react";

type tasksProp = string[];

function TodoList() {

    const [tasks, setTasks] = useState<tasksProp>([]);

    const taskRef = useRef<HTMLInputElement>(null);
  
    const addTask = () => {

        const newTask = taskRef.current?.value;
        console.log(newTask)
        if (newTask){
            setTasks([...tasks, newTask])
        }
    }

    const deleteTask = (e: React.MouseEvent,index: number ) => {
        console.log(index)
        
        setTasks([...tasks.slice(0,index), ...tasks.slice(index+1)])
    }

    return (
    <div>
      <h1>Todo List</h1>
       <input type="text" ref={taskRef} />
       <button onClick={addTask}>Add task</button> 
       <ul>
        {tasks.map((task, index)=>
            <li key={index}>
                {task}
                <button onClick={(event) => deleteTask(event, index)}>delete</button>
            </li> 
        )}
       </ul>
    </div>
  );
}

export default TodoList;
