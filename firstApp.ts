import axios from 'axios';

const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    // type annotation
    // const todo: Todo = res.data;
    // type assertion
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo (id, title, completed);
});


function logTodo(id: number, title: string, completed: boolean) {
    console.log('ID: ', id);
    console.log('Title: ', title);
    console.log('Completed: ', completed);    
}
