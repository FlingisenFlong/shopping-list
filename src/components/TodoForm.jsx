import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='add your item' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add item</button>
    </form>
  )
}