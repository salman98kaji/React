import { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return  //Ensures that the user doesn't submit an empty todo.
        addTodo({todo:todo ,completed:false})
        setTodo("")  //Resets the input field after the todo is successfully added.
    }

  return (
    <form  className="flex" onSubmit={add}>
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo} //The value of the input field is controlled by the todo state.
            onChange={(e) => setTodo(e.target.value)} //triggers whenever the user types in or changes the value of the input field.The function (e) => setTodo(e.target.value) is called on every keystroke.
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default TodoForm