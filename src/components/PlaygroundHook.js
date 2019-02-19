import React, { useState } from 'react'

export default function PlaygroundHook() {
  // const state = useState('')
  // const text = state[0]
  // const setText = state[1]
  const [text, setText] = useState('')

  // const state = useState(false
  // const checked = state[0]
  // const setChecked = state[1]
  const [checked, setChecked] = useState(false)

  function handleInputChange(e) {
    setText(e.target.value)
  }

  function handleCheckboxChange(e) {
    // setChecked(e.target.checked)
    // support function same as setState api
    setChecked(prevChecked => !prevChecked)
  }

  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <ul>
        <li><span>text: </span>{text}</li>
        <li><span>checked: </span>{checked.toString()}</li>
      </ul>
    </section>
  )
}