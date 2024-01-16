import React from "react";

const EventComponent: React.FC = () => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const onDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("I'm being dragged");
        console.log(event);
    }

    return ( 
        <div>
            <h2>Event Component</h2>
            <input type="text" name="" id="" onChange={onChangeHandler} />
            <div draggable onDrag={onDragHandler}>Drag me</div>
        </div>
     );
}
 
export default EventComponent;