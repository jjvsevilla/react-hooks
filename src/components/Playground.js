import React, { Component } from 'react'

export default class Playground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      checked: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({ text: e.target.value })
  }

  handleCheckboxChange(e) {
    this.setState({ checked: e.target.checked })
  }

  render() {
    const { text, checked } = this.state
    return (
      <section>
        <input type="text" value={text} onChange={this.handleInputChange}></input>
        <input type="checkbox" checked={checked} onChange={this.handleCheckboxChange} />
        <ul>
          <li><span>text: </span>{text}</li>
          <li><span>checked: </span>{checked.toString()}</li>
        </ul>
      </section>
    )
  }
}