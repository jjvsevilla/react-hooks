import React, { useState } from 'react'

export default function PlaygroundObjectHook() {
  const [state, setState] = useState({
    text: '',
    checked: false
  })

  const handleInputChange = e =>
    mergeState({ text: e.target.value })


  const handleCheckboxChange = e =>
    mergeState({ checked: e.target.checked })

  const mergeState = partialState =>
    setState(prevState => ({ ...prevState, ...partialState }))

  return (
    <section>
      <input
        type="text"
        value={state.text}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        checked={state.checked}
        onChange={handleCheckboxChange}
      />
      <ul>
        <li><span>text: </span>{state.text}</li>
        <li><span>checked: </span>{state.checked.toString()}</li>
      </ul>
    </section>
  )
}