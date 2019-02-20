import React, { useContext } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import GreetingRed from './components-class/GreetingRed';
import GreetingBlue1 from './components-func/GreetingBlue1';
import GreetingBlue2 from './components-func/GreetingBlue2';
import GreetingBlue3 from './components-func/GreetingBlue3';
import { RedContext, BlueContext } from './components-class/Theme';
import './App.scss';

export default function View() {
  const redTheme = useContext(RedContext)
  const blueTheme = useContext(BlueContext)
  return (
    <div className="app">
      <RedContext.Consumer>
        {redTheme => (
          <div className={redTheme}>
            <Header title="React Class Component" />
            <Section>
              <GreetingRed />
            </Section>
          </div>
        )}
      </RedContext.Consumer>

      <div className={blueTheme}>
        <Header title="React Functional Component" />
        <Section>
          <GreetingBlue3 />
        </Section>
      </div>
    </div>
  );
}
