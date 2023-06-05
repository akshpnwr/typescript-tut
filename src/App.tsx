import { useState } from 'react'
import './App.css'

type PostProps = {
  id: number,
  title: string
}[];

function getData(): PostProps {
  return [{id: 1, title: 't1'}, {id: 2, title: 't2'}, {id: 3, title: 't3'}];
}

function App() {

  const [title, setTitle] = useState<string | null>("Title");

  const changeTitle = () => {
    setTitle("New title");
  }

  const data = getData();

  return (
    <>
    <h1 onClick={changeTitle}>
      {title}
    </h1>
    <h1>Typescripting an Object</h1>
    {data.map(item => 
      <div>
        <h2>{item.id}</h2>
        <p>{item.title}</p>
      </div>
    )  
  }
    </>
  )
}

export default App
