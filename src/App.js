import React, { useState } from 'react'
import TodoList from './TodoList';


export default function App() {
   const [item,setItem]=useState('');
   const [items,setItems] = useState([]);
   const itemEvent = (e) => {
     let val = e.target.value;
      setItem(val);
   }
   
   const listOfItems = () => {
     setItems((olditems)=>{
      // console.log(olditems)
        olditems = [...olditems,item];
        return olditems
     });
     setItem("")
   };

   const deleteItem = (id) => {
      console.log('deleted')
      setItems((olditems)=>{
        console.log(olditems)
        return olditems.filter((arrEle,index)=>{
        return index!=id
        })
      })
   }
  return (
    <>
    <div className='main-div'>
      <div className='centre-div'>
        
        <h1>ToDo List</h1>
        
        <input type="text" value={item} placeholder='Add an Item'  onChange={itemEvent}></input>
        <button onClick={listOfItems}>+</button> 
        
        <ol>
        {items.map((x,index) => {
            return  <TodoList text = {x} id={index} key={index} onSelect = {deleteItem}/>
            
         })}
          
        </ol>
      </div>
    </div>
    </>
  )
}
