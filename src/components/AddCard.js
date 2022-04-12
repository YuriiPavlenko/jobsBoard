import axios from "axios"
import React, { useState } from "react"
import { v4 as uuid4 } from "uuid"
import EditableInfo from "./EditableInfo"

const AddCard = ({ cards, setCards }) => {
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
      setCards,
      key: id,
    }
    axios.post(
      "http://localhost:8080/",
      JSON.stringify({ stellen: [...cards, { ...card, key: undefined }] }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    setAdding(false)
    setInitial()
    setCards(previous => [...previous, card])
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
