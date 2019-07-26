import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('/api/greeting')
    .then((resp) => {
            return resp.json();
        })
    .then((data)=> {
      // Log the data just to demonstrate the call works.
      console.log(data.name);
    })
    .catch(function(error) {
      console.error("Error fetching: ", error);
    });
  }
  
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;