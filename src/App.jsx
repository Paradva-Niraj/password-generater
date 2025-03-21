import React, { useCallback, useEffect, useState } from 'react';
import './App.css'

function App() {

  const [len,setlen] = useState(8);
  const [numallow,setnumallow] = useState(false);
  const [charallow,setcharallow] = useState(false);
  const [password,setpassword] = useState("");


  const passwordgen = useCallback(()=>{
    let pass = ""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numallow) str += "1234567890";
    if(charallow) str += "@#$%&*";

    for(var i=1;i<=len;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setpassword(pass)

  },[numallow,charallow,len,password])

  useEffect(()=>{
    passwordgen()
  },
  [len,charallow,numallow])

  return (
    <>
    <div className="w-full mx-auto shadow-lg rounded-xl px-4 py-10 bg-gray-700 text-white">
    <h3 className="text-3xl font-bold uppercase text-center mb-6 tracking-wide">
      Password Generator
    </h3>

    <div className="flex items-center gap-2 mb-4">
      <input 
        type="text" 
        value={password} 
        className="w-full py-2 px-4 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none"
        readOnly
      />
      <button 
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input type="range" name="" min={8} max={24} value={len} onChange={(e)=>{setlen(e.target.value)}} className="cursor-pointer" id="" />
        <label htmlFor="" className="uppercase">length : {len}</label>
        <input type="checkbox" name="" className="mx-2" defaultChecked={numallow} onChange={()=>setnumallow(Prev=>!Prev)} id="" />
        <label htmlFor="" className="uppercase">number allow</label>
        <input type="checkbox" name="" className="mx-2" defaultChecked={charallow} onChange={()=>setcharallow(Prev=>!Prev)} id="" />
        <label htmlFor="" className="uppercase">special char allow</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
