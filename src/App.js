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
          position="Data Science 0 st./woche"
          link="https://karriere.deutschebahn.com/karriere-de/Suche/Werkstudent-Data-Science-w-m-d--7269560?jobId=133298"
        />
        <Card position="Data Science 1 st./woche" />
        <Card position="Data Science 2 st./woche" />
        <Card position="Data Science 3 st./woche" />
        <Card position="Data Science 4 st./woche" />
        <Card position="Data Science 5 st./woche" />
        <Card position="Data Science 6 st./woche" />
        <Card position="Data Science 7 st./woche" />
        <Card position="Data Science 8 st./woche" />
        <Card position="Data Science 9 st./woche" />
        <Card position="Data Science 10 st./woche" />
        <Card position="Data Science 11 st./woche" />
        <Card position="Data Science 12 st./woche" />
        <Card position="Data Science 13 st./woche" />
        <Card position="Data Science 14 st./woche" />
        <Card position="Data Science 15 st./woche" />
        <Card position="Data Science 16 st./woche" />
      </div>
    </>
  )
}
export default App
