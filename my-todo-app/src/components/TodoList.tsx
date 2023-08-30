import { useRef, useState } from "react";

const todos = ['Buy groceries', 'Clean the house', 'Walk the dog'];

export default function TodoList() {
  const [toDos,setToDOs]=useState<string[]>(todos);
  const [selectedIndex, setSelectedIndex]=useState<number>(-1);
  const inputRef= useRef<HTMLInputElement | null>(null);

  const handleClick=(index:number):void=>{
    setSelectedIndex(index);
  }
  
  const handleSubmit=():void=>{
     if(inputRef.current){
      setToDOs([...toDos, inputRef.current.value]);
      inputRef.current.value="";
     }

     
  }


  return (
  <div className="to-do-list">
   <span className="title">To Do List</span>
   <ul className="list-group">
   { todos.length !== 0 ?
      toDos.map((td,index)=>(
        <li key={index} onClick={()=>handleClick(index)} 
        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}>
         {td}
       </li>
      )) : 
      <li className="list-group-item">
        You do not have toDO now
      </li>}
   </ul>
   <div className="input-group">
    <input type="text" ref={inputRef} className="form-control" placeholder="Enter new toDo" aria-label="toDo"></input>
    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Submit</button>
   </div>
  </div>
  
  )
}
