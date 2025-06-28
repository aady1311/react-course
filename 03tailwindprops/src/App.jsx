import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    name: "Aditya",
    age: "19",
    address: {
      city: "Mumbai",
      state: "Maharastra",
      country: "India"
    }
  }

  let myArr = [1,2,3,4,5,6,7,8,9]

  

  return (
    <>
   <h1 className='text-3xl bg-green-500 p-4 rounded-md' >Vite with tailwind</h1>
   <Card username="Aditya" post='Assinged'/>
   <Card username="Nupur" post="Assinged" image='https://i.pinimg.com/736x/15/c7/d7/15c7d71b129809ba996ebccc8f975e15.jpg' />
   <Card/>
   <Card/>
   
    </>
  )
}

export default App
