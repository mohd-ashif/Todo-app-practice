import React from 'react'

function TodoItem (props) {
  return (
    <div onClick={()=>{
        props.onChecked(props.id)
    }}>
    <li>{props.text}</li>
    <button className='dlt'>Delete</button>
    </div>
  )
}

export default TodoItem