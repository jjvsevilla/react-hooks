import React, { useState, useEffect } from 'react'
import Row from '../components/Row';

// Using partial state update on useState hook
export default function GreetingBlue2() {
  const [state, setState] = useState({
    branch: 'master',
    version: '16.8.0'
  })
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = `Hooks version ${state.version} on ${state.branch} branch`
  }, [state])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleBranchChange(e) {
    mergeState({ branch: e.target.value })
  }

  function handleVersionChange(e) {
    mergeState({ version: e.target.value })
  }

  function mergeState(partialState) {
    setState(prevState => ({ ...prevState, ...partialState }))
  }

  return (
    <>
      <Row label="Branch">
        <input
          value={state.branch}
          onChange={handleBranchChange}
        />
        {state.branch && <span>{state.branch}</span>}
      </Row>

      <Row label="Version">
        <input
          value={state.version}
          onChange={handleVersionChange}
        />
        {state.version && <span>{state.version}</span>}
      </Row>

      <Row label="Width">
        <span>{width}</span>
      </Row>
    </>
  )
}
