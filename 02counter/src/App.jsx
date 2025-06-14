import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(13);
  //    variable    method
  const addValue = () => {
    // setCounter(counter + 1)
    setCounter((prevCounter) =>  prevCounter + 1 ) //! ek saath jada value increas karta hai do task ei hi function pe kaaam kar raha hai 
    // setCounter((prevCounter) =>  prevCounter + 1 )
    // setCounter((prevCounter) =>  prevCounter + 1 )
    // setCounter((prevCounter) =>  prevCounter + 1 )


    // console.log(counter)
  }
  const removeVlaue = () => {
    setCounter(counter - 1)
    // console.log(counter)

  }
  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add  value</button> {" "}
      <button onClick={removeVlaue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
