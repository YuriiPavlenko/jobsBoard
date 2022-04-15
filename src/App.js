import axios from "axios"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import AddCard from "./components/AddCard"
import { useEffect, useState } from "react"

function App() {
  const [cards, setCards] = useState([])
  const [mainUser, setMainUser] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const rawKotyaCards = await axios.get("http://localhost:8080/kotya")
      const kotyaCards = rawKotyaCards.data.stellen.map(stelle => {
        return { ...stelle, user: "kotya" }
      })
      const rawKityaCards = await axios.get("http://localhost:8080/kitya")
      const kityaCards = rawKityaCards.data.stellen.map(stelle => {
        return { ...stelle, user: "kitya" }
      })
      setCards([...kotyaCards, ...kityaCards])
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar mainUser={mainUser} switchUser={() => setMainUser(!mainUser)} />
      <div className="card-container">
        {mainUser
          ? cards
              ?.filter(card => card.user === "kotya")
              ?.map(card => {
                return (
                  <Card
                    {...card}
                    mainUser={mainUser}
                    setCards={setCards}
                    key={card.id}
                  />
                )
              })
          : cards
              ?.filter(card => card.user === "kitya")
              ?.map(card => {
                return (
                  <Card
                    {...card}
                    mainUser={mainUser}
                    setCards={setCards}
                    key={card.id}
                  />
                )
              })}
        <AddCard setCards={setCards} mainUser={mainUser} />
      </div>
    </>
  )
}
export default App
