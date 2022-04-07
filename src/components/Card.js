import React from "react"

const Card = ({ typ, firma, position, link }) => {
  return (
    <div className="card">
      <div className="name-container">
        <span className="card-name">{position}</span>
      </div>
      <div>
        <span className="card-text">Frima: {firma}</span>
      </div>
      <div>
        <span className="card-text">Type: {typ}</span>
      </div>
      <div>
        <a target="_blank" href={link} rel="noreferrer">
          Link
        </a>
      </div>
    </div>
  )
}

export default Card
