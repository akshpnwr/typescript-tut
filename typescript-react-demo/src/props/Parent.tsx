import { ChildAsFC } from "./Child";

const Parent = () => {

    return (<ChildAsFC color="red" onClick={()=>console.log('clicked')}>Children text</ChildAsFC>);
}

export default Parent;