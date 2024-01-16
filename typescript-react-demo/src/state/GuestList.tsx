import { useEffect, useRef, useState } from 'react'
 
const GuestList: React.FC = () => {
    const [guests, setGuests] = useState<string[]>([]); // guests is an array of strings
    const nameRef = useRef<HTMLInputElement | null>(null); 

    useEffect(()=>{
        nameRef.current?.focus()
    },[])

    const addName = () => {
      const guestNameToAdd = nameRef.current?.value; 
      nameRef.current!.value = ''; 
      
      if (!guestNameToAdd) return;

      setGuests([...guests, guestNameToAdd])
    }

    return ( 
        <>
            <h3>Party Guest List</h3>
            <ul>
            {guests.map((guest, index)=><li key={index}>{guest}</li>)}
            </ul>

            <input type="text" ref={nameRef} placeholder="Enter guest name" />
            <br/>
            <button type="submit" onClick={addName}>Add</button>
        </>     
        );
}
 
export default GuestList;