import React, { useState, useEffect } from 'react'
import Row from '../components/Row';

// Using custom hooks
export default function GreetingBlue3() {
  const branch = useFormInput('master')
  const version = useFormInput('16.8.0')
  useDocumentTitle(`Hooks version ${version.value} on ${branch.value} branch`)

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