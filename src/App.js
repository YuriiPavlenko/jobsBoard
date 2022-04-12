import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import AddCard from "./components/AddCard"
import axios from "axios"

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const httpRequest = await axios.get("http://localhost:8080/")
      setCards(
        httpRequest.data.stellen.map(elem => {
          return { ...elem, setCards: setCards, key: elem.id }
        })
      )
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="card-container">
        {cards.map(card => {
          return <Card {...card} />
        })}
        <AddCard setCards={setCards} cards={cards} />
      </div>
    </>
  )
}
export default App
