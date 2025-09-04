import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className ="bg-green-400 text-3xl font-bold underline mb-4" >Tailwind Test</h1>


      <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <p className="text-white  text-sm">Bored ape nft accidental</p>
            <p className="text-white  text-sm">Price</p>
          </div>
          <div className="flex  justify-between">
            <p className="text-white text-sm" >#345</p>
            <p className="text-white text-sm" >0.01</p>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
