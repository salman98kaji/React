
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos) //hook allows you to extract data from the Redux store's state.
  //In a React component, you can use the useDispatch hook to dispatch these actions.
  const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
      </li>
    ))}
    </>
  )
}

export default Todos