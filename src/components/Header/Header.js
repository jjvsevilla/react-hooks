import React from 'react'
import './Header.scss'

export default function Header({ title }) {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  )
}