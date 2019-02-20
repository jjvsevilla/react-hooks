import React, { useState, useEffect } from 'react'
import Row from '../components/Row';

// Using custom hooks
export default function GreetingBlue3() {
  const branch = useFormInput('master')
  const version = useFormInput('16.8.0')
  useDocumentTitle(`Hooks version ${version.value} on ${branch.value} branch`)
  const width = useWindowWidth()

  return (
    <>
      <Row label="Branch">
        <input {...branch} />
        {branch.value && <span>{branch.value}</span>}
      </Row>

      <Row label="Version">
        <input {...version} />
        {version.value && <span>{version.value}</span>}
      </Row>

      <Row label="Width">
        <span>{width}</span>
      </Row>
    </>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width;
}