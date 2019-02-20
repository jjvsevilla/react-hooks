import React, { useState, useEffect } from 'react'
import Row from '../components/Row';

// Using useState and useEffect hooks
export default function GreetingBlue1() {
  const [branch, setBranch] = useState('master')
  const [version, setVersion] = useState('16.8.0')
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = `Hooks version ${version} on ${branch} branch`
  }, [version, branch])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleBranchChange(e) {
    setBranch(e.target.value)
  }

  function handleVersionChange(e) {
    setVersion(e.target.value)
  }

  return (
    <>
      <Row label="Branch">
        <input
          value={branch}
          onChange={handleBranchChange}
        />
        {branch && <span>{branch}</span>}
      </Row>

      <Row label="Version">
        <input
          value={version}
          onChange={handleVersionChange}
        />
        {version && <span>{version}</span>}
      </Row>

      <Row label="Width">
        <span>{width}</span>
      </Row>
    </>
  )
}