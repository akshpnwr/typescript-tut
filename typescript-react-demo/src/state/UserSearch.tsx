import { useState } from "react";

interface User {
    name: string;
    age: number;
}

const listOfUsers: User[] =[{name: 'akash', age: 24}, {name: 'rahul', age: 25}]; // an array of User objects

const UserSearch: React.FC = () => {
    
    const [name, setName] = useState(''); 
    const [user, setUser] = useState<User>();

    const findUserHandler = () => {
        const foundUser = listOfUsers.find(user=>user.name===name);
        setUser(foundUser);
    }

    return (
    <div>
        <h2>Find</h2>
        <input type="text" name="" id="" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <button onClick={findUserHandler}>Find</button>
        <h2>User Details: </h2>
        <p>Name : {user?.name}</p>
        <p>Age : {user?.age}</p>
    </div>  
    );
}
 
export default UserSearch;