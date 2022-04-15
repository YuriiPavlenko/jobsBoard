import axios from "axios"
import React, { useState } from "react"
import { v4 as uuid4 } from "uuid"
import EditableInfo from "./EditableInfo"

const AddCard = ({ setCards, mainUser }) => {
  const [adding, setAdding] = useState(false)
  const [position, setPosition] = useState("React ASP.NET")
  const [firma, setFirma] = useState("Google Inc.")
  const [typ, setTyp] = useState("Fullstack")
  const [status, setStatus] = useState("to be applied")
  const [link, setLink] = useState("#")

  const setInitial = () => {
    setAdding(false)
    setPosition("React ASP.NET")
    setFirma("Google Inc.")
    setTyp("Fullstack")
    setStatus("to be applied")
    setLink("#")
  }

  const addCard = () => {
    const id = uuid4()
    const card = {
      typ,
      firma,
      status,
      position,
      link,
      id,
      user: mainUser ? "kotya" : "kitya",
    }
    setAdding(false)
    setInitial()
    console.log("saving")
    console.log(mainUser)
    setCards(prev => {
      const saveData = async () => {
        const currentUserCards = prev.filter(
          card => card.user === (mainUser ? "kotya" : "kitya")
        )
        console.log([...currentUserCards, card])
        await axios.post(
          mainUser
            ? "http://localhost:8080/kotya"
            : "http://localhost:8080/kitya",
          JSON.stringify(
            {
              stellen: [...currentUserCards, card],
            },
            null,
            2
          ),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      }
      saveData().then(a => {
        console.log("save completed")
      })
      return [...prev, card]
    })
  }

  return (
    <div className={`card ${adding ? null : "add-card"}`}>
      {adding ? (
        <div>
          <EditableInfo
            name="position"
            title
            setter={setPosition}
            xAction={() => setAdding(false)}
            defaultValue="React ASP.NET"
          />
          <EditableInfo
            name="Frima"
            setter={setFirma}
            defaultValue="Google Inc."
          />
          <EditableInfo name="Type" setter={setTyp} defaultValue="Fullstack" />
          <EditableInfo
            name="Status"
            setter={setStatus}
            defaultValue="to be applied"
          />
          <EditableInfo name="Link" setter={setLink} defaultValue="#" />

          <div className="save-button" onClick={addCard}>
            Save
          </div>
        </div>
      ) : (
        <span className="add" onClick={() => setAdding(true)}>
          +
        </span>
      )}
    </div>
  )
}

export default AddCard
