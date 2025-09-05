import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {

  let myObj = {
      username: "hitesh",
      age: 21
  }  

  let myArr = [4,7,9,3,6,8]

  return (
    <>
    
      <h1 className ="bg-green-400 text-3xl font-bold underline mb-4" >Tailwind Test</h1>
      
      <Card username="piyush" btntext="click me" varObj= {myObj} varArr= {myArr} />
      <Card username = "bittu"  />

     
      
      
    </>
  )

}

export default App
