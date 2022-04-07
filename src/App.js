import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const httpRequest = await fetch("jobsForOlga.json")
      const data = await httpRequest.json()
      setCards(data.stellen)
    }
    fetchData()
  }, [])

  console.log(cards)
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card
          typ="Data Science"
          firma="DB"
          position="Data Science 13 st./woche"
          link="https://karriere.deutschebahn.com/karriere-de/Suche/Werkstudent-Data-Science-w-m-d--7269560?jobId=133298"
        />
        <Card
          number={2}
          text="piska popka iska pipiska iska pipiska iska pipiska iska pipiska iska pipiska"
        />
        <Card number={3} piska="vonuchaya" />
      </div>
    </>
  )
}
export default App
