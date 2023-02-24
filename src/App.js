import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'John', lastName: 'Serra' },
      company: 'Premium',
  };
  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}.
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'Andrew', lastName: 'Serra_' } });
            console.log(this.state);
          }}>
            Change Name
          </button>

        </header>
      </div>
    );
  }
}

export default App;
