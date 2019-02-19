import React, { Component } from 'react';
import './App.scss';
import Playground from './components/Playground';
import PlaygroundHook from './components/PlaygroundHook';
import PlaygroundObjectHook from './components/PlaygroundObjectHook';
import Row from './components/Row';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row label="Using State">
          <Playground />
        </Row>
        <Row label="Using Hooks">
          <PlaygroundHook />
        </Row>
        <Row label="Using Hooks with Object format">
          <PlaygroundObjectHook />
        </Row>
      </div>
    );
  }
}

export default App;
