
import './App.css'
import Cards from './Components/Cards'

function App() {
 
// const myObj = {
//   username: "Salman",
//   age: 25
// }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind CSS</h1>
      <Cards username='chai aur code' btnText='click me'/>
      <Cards username='chai aur coffe' btnText='submit'/>
        
    </>
  )
}

export default App
