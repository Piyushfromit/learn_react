import { useState, useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [speCharAllowed, setSpeCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(speCharAllowed) str += "!@#$%^&*-_+=[]{}~'"

    for(let i = 1; i<= Array.length; i++){
       let char = Math.random();
    }

  }, [length, numberAllowed, speCharAllowed, password ])

  return (
    <>
     <h1 className = "text-4xl text-center text-white">Password generator</h1>
    </>
  )




}

export default App
