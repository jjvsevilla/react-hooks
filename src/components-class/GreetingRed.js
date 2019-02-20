import React, { Component } from 'react'
import Row from '../components/Row';

export default class GreetingRed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      branch: 'master',
      version: '16.8.0'
    }

    this.handleBranchChange = this.handleBranchChange.bind(this)
    this.handleVersionChange = this.handleVersionChange.bind(this)
  }

  handleBranchChange(e) {
    this.setState({
      branch: e.target.value
    })
  }

  handleVersionChange(e) {
    this.setState({
      version: e.target.value
    })
  }

  componentDidMount() {
    document.title = `Hooks version ${this.state.version} on ${this.state.branch} branch`
  }

  componentDidUpdate() {
    document.title = `Hooks version ${this.state.version} on ${this.state.branch} branch`
  }

  render() {
    return (
      <>
        <Row label="Branch">
          <input
            value={this.state.branch}
            onChange={this.handleBranchChange}
          />
          {this.state.branch && <span>{this.state.branch}</span>}
        </Row>
        <Row label="Version">
          <input
            value={this.state.version}
            onChange={this.handleVersionChange}
          />
          {this.state.version && <span>{this.state.version}</span>}
        </Row>
      </>
    )
  }
}