import React from "react"

const EditableInfo = ({ name, title, defaultValue, setter, xAction }) => {
  return (
    <div className={title ? "name-container" : null}>
      <span className={title ? "card-name" : "card-text"}>
        {title ? null : `${name}: `}
        <input
          type="text"
          style={title ? { textAlign: "center" } : null}
          onChange={event => setter(event.target.value)}
          defaultValue={defaultValue}
        />
        {title ? (
          <button className="button" onClick={() => xAction()}>
            X
          </button>
        ) : null}
      </span>
    </div>
  )
}

export default EditableInfo
