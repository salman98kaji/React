import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = React.useState('')
    //In a React component, you can use the useDispatch hook to dispatch these actions.
    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) //dispatch ek reducer(addTodo) ki use karte hue store k ander values(todo) me changes karta hai
        setInput('')
    }

  return (
    <form  className="flex" onSubmit={add}>
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={input} //The value of the input field is controlled by the todo state.
            onChange={(e) => setInput(e.target.value)} //triggers whenever the user types in or changes the value of the input field.The function (e) => setTodo(e.target.value) is called on every keystroke.
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default AddTodo

