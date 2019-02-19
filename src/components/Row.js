import React from 'react'

export default function Row(props) {
  return (
    <div className="row">
      <h3>{props.label}</h3>
      {props.children}
    </div>
  )
}