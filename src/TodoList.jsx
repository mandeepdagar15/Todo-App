import React, { useState } from 'react'

export default function TodoList(props) {
    
  return (
      <>
    <div className='todo_style'>
    <i className="fa fa-times" onClick={()=>{
        props.onSelect(props.id)
    }}></i>
    <li>{props.text}</li>
    </div>
    </>
  )
};
