import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const inputRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str += "0123456789"
    if(character) str += "!@#$%^&*()_+-={}[]|:;<>,.?/"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numAllowed, character, setPassword])

  const copyPasswordToClip = useCallback(() => {
    inputRef.current?.select() 
    inputRef.current.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numAllowed, character, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-40 bg-yellow-400 text-black font-bold">
        <h1 className="text-center m-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={inputRef} />
          
          <button className="bg-blue-600 px-3 hover:bg-red-400 " onClick={copyPasswordToClip} >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={20} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}} />
            <label>Length:({length})</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" className="cursor-pointer" defaultChecked={numAllowed} id="numinput" onChange={() => {setNumAllowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" className="cursor-pointer" defaultChecked={character} id="charinput" onChange={() => {setCharacter((prev) => !prev)}} />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
