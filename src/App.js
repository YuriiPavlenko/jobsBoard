import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [state, setState] = useState({})

  useEffect(() => {}, [])
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
