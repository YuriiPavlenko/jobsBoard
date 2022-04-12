import React from "react"
import { useState, useEffect } from "react"
import EditableInfo from "./EditableInfo"

const Card = props => {
  const [colorClassName, setColorClassName] = useState("")
  const [position, setPosition] = useState(props.position)
  const [firma, setFirma] = useState(props.firma)
  const [typ, setTyp] = useState(props.typ)
  const [status, setStatus] = useState(props.status)

  const deleteCard = () => {
    props.setCards(prev => prev.filter(elem => elem.id !== props.id))
  }

  useEffect(() => {
    const card = { ...props, position, firma, typ, status, key: props.id }
    props.setCards(prev =>
      prev.map(elem => {
        if (elem.id === props.id) return card
        return elem
      })
    )
  }, [position, firma, typ, status, props])

  useEffect(() => {
    if (status === "applied") setColorClassName("applied")
    else if (status === "won't apply") setColorClassName("wont-apply")
    else if (status === "to be applied") setColorClassName("to-apply")
    else setColorClassName("")
  }, [status])

  return (
    <div className={`card ${colorClassName}`}>
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
          <div className={`${colorClassName}-button go-button`}>to site</div>
        </a>
      </div>
    </div>
  )
}

export default Card
