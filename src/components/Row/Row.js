import React from 'react'
import './Row.scss'

export default function Row({ label, children }) {
  return (
    <div className="row">
      <label>{label}</label>
      {children}
    </div>
  )
}