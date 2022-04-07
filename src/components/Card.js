import React from "react"
import { useState, useEffect } from "react"
const Card = ({ typ, firma, position, link, status }) => {
  const [colorClassName, setColorClassName] = useState("")

  useEffect(() => {
    if (status === "applied") setColorClassName("applied")
    if (status === "won't apply") setColorClassName("wont-apply")
    if (status === "to be applied") setColorClassName("to-apply")
  }, [])

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div className={`card ${colorClassName}`}>
        <div className="name-container">
          <span className="card-name">{position}</span>
          <button className="button">X</button>
        </div>
        <div className="text-otstup">
          <span className="card-text">Frima: {firma}</span>
        </div>
        <div>
          <span className="card-text">Type: {typ}</span>
        </div>
        <div>
          <span className="card-text">Status: {status}</span>
        </div>
      </div>
    </a>
  )
}

export default Card
