import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

import { Form, FormControl, Button} from 'react-bootstrap';

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

      <Clock
        deadline={this.state.deadline} //You declare the child component within the parent, and then add the data you want to pass to it as 'props'
      />

    <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})} //gives us what the user types
          />
        <Button onClick={() => this.changeDeadLine()}>Submit</Button>
    </Form>

    </div>
    )
  }
}
//Having an anonymous function prevents loops and potential crashing of the app

export default App;
