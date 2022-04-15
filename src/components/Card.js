import axios from "axios"
import React, { useRef } from "react"
import { useState, useEffect } from "react"
import EditableInfo from "./EditableInfo"

const Card = props => {
  const [position, setPosition] = useState(props.position)
  const [firma, setFirma] = useState(props.firma)
  const [typ, setTyp] = useState(props.typ)
  const [status, setStatus] = useState(props.status)

  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
    } else {
      props.setCards(prev => {
        const saveData = async () => {
          const newCards = prev.map(card => {
            if (card.id === props.id) {
              return { ...card, position, firma, typ, status }
            }
            return card
          })
          const currentUserCards = newCards.filter(
            card => card.user !== (props.mainUser ? "kotya" : "kitya")
          )
          await axios.post(
            props.mainUser
              ? "http://localhost:8080/kotya"
              : "http://localhost:8080/kitya",
            JSON.stringify(
              {
                stellen: [...currentUserCards],
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
        saveData()
        return prev.map(card => {
          if (card.id === props.id) {
            return { ...card, position, firma, typ, status }
          }
          return card
        })
      })
    }
  }, [position, firma, typ, status])

  const deleteCard = () => {
    props.setCards(prev => {
      console.log("delete camputer")
      const saveData = async () => {
        const newCards = prev.filter(card => card.id !== props.id)
        const currentUserCards = newCards.filter(
          card => card.user !== (props.mainUser ? "kotya" : "kitya")
        )
        console.log(currentUserCards)
        console.log(props.mainUser)
        await axios.post(
          props.mainUser
            ? "http://localhost:8080/kotya"
            : "http://localhost:8080/kitya",
          JSON.stringify(
            {
              stellen: currentUserCards,
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
      saveData()
      return prev.filter(card => card.id !== props.id)
    })
  }

  const getStatusClassName = () => {
    if (status === "applied") return "applied"
    if (status === "to be applied") return "to-apply"
    if (status === "won't apply") return "wont-apply"
  }

  return (
    <div className={"card " + getStatusClassName()}>
      <EditableInfo
        name="position"
        title
        setter={setPosition}
        xAction={deleteCard}
        defaultValue={position}
      />
      <EditableInfo name="Frima" setter={setFirma} defaultValue={firma} />
      <EditableInfo name="Type" setter={setTyp} defaultValue={typ} />
      <EditableInfo name="Status" setter={setStatus} defaultValue={status} />
      <div className="buttons">
        <a target="_blank" href={props.link} rel="noreferrer">
          <div className={`${getStatusClassName()}-button go-button`}>
            to site
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card
