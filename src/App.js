import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const httpRequest = await fetch("jopsForJopa.json")
      const data = await httpRequest.json()
      setCards(data.stellen)
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="card-container">
        {cards.map(card => {
          return (
            <Card
              typ={card.typ}
              firma={card.firma}
              position={card.position}
              status={card.status}
              link={card.link}
            />
          )
        })}
      </div>
    </>
  )
}
export default App
