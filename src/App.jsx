import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '' //allows you to update state
    }
  }

  changeDeadLine() {
    this.setState({deadline: this.state.newDeadline});
  }




  render() {
    return (
      <div className="App">

        <div className="App-title">{this.state.deadline}</div>
        <div>
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})} //gives us what the user types
          />
        <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>

    </div>
    )
  }
}
//Having an anonymous function prevents loops and potential crashing of the app

export default App;
