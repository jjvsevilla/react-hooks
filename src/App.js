import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Section from './components/Section';
import GreetingRed from './components-class/GreetingRed';
import GreetingBlue1 from './components-func/GreetingBlue1';
import GreetingBlue2 from './components-func/GreetingBlue2';
import GreetingBlue3 from './components-func/GreetingBlue3';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="angular">
          <Header title="Class Component" />
          <Section>
            <GreetingRed />
          </Section>
        </div>

        <div className="react">
          <Header title="Functional Component + Hooks" />
          <Section>
            <GreetingBlue1 />
          </Section>
        </div>

        <div className="react">
          <Header title="Functional Component + Partial State + Hooks" />
          <Section>
            <GreetingBlue2 />
          </Section>
        </div>

        <div className="react">
          <Header title="Functional Component + Custom Hooks" />
          <Section>
            <GreetingBlue3 />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;

