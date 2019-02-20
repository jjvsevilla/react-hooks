import React from 'react'
import './Section.scss'

export default function Section({ children }) {
  return (
    <div className="section">
      <div className="console">
        <div className="console-head">
          <div className="console-dot dot-red" />
          <div className="console-dot dot-yellow" />
          <div className="console-dot dot-green" />
        </div>
        <div className="console-body">
          <div className="console-prompt">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
