import { useState } from 'react';
import './App.css';

export default function App() {
  const [newItem, setNewItem] = useState("")
 // setNewItem("sfdsd")
  return (
  <>
  <form className='new-item-form'>
    <div className="form-row">
      <label htmlFor='item'>New Item</label>
      <input type="text" id="item"/>
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