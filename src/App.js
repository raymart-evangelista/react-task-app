// handle input field with logic
import React, { Component } from 'react';
import Overview from './components/Overview'


class App extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      currentInput: '',
      tasksList: [],
    }
    
    this.onInputChange = this.onInputChange.bind(this)
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onInputChange(event) {
    this.setState({
      currentInput: event.target.value
    })
  }

  onClickBtn() {
    this.setState({
      tasksList: [...this.state.tasksList, this.state.currentInput]
    })
  }

  render() {
    return (
      <div>
        <input onChange={event => this.onInputChange(event)} type="text" id="task-input" />
        <button onClick={this.onClickBtn}>Submit</button>
        <Overview tasks={this.state.tasksList} />
      </div>
    )
  }
}

export default App;
