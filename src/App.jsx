import { useState } from 'react';
import './App.css';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
    return [
      ...currentTodos,
       { id: crypto.randomUUID(), title: newItem, completed:
       false},

    ]
    }) 
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    
  }


  return (

  <>

  <form onSubmit={handleSubmit} className='new-item-form'>

    <div className="form-row">
      <label htmlFor='item'>New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
    </div>

    <button className='btn'>Add</button>

  </form>

  <h1 className='header'>To do list</h1>


  <ul className='list'>

    <li>
      <label>
        <input type="checkbox" />
        item 1
      </label>
      <button className='btn btn-danger'>Delete</button>

      <label>
        <input type="checkbox" />
        item 2
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
  </ul>
  </>
  )
}