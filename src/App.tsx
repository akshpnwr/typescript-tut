import { useState } from 'react'
import './App.css'
import Post from './Post';
import TodoList from './ToDo';

type PostProps = {
  id: number,
  title: string,
  message? : string
}[];

function getData():PostProps {
  return [{id: 1, title: 't1', message: 'halo'}, {id: 2, title: 't2'}, {id: 3, title: 't3'}];
}

function App() {

  const [title, setTitle] = useState<string | null>("Title");

  const changeTitle = (e: React.MouseEvent) => {
    setTitle("New title");
    console.log(e.target);
  }

  const data = getData();

  return (
    <>
    {/* <h1 onClick={(e)=> changeTitle(e)}>
      {title}
    </h1>
    <h1>Typescripting an Object</h1>
    {data.map(item => 
      <Post id={item.id} title={item.title} message={item.message} />
    )  
  } */}
    <TodoList />
    </>
  )
}

export default App
