// handle input field with logic
import React, { Component } from 'react';
import Overview from './components/Overview'


class App extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      currentInput: [],
    }
    
    this.onInputChange = this.onInputChange.bind(this)
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onInputChange() {

  }

  onClickBtn() {
    console.log('Button has been clicked!')
    let someInput = document.querySelector('#task-input')
    console.log(someInput.value)

    // this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value

    this.setState({
      currentInput: [...this.state.currentInput, someInput.value]
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} type="text" id="task-input" />
        <button onClick={this.onClickBtn}>Submit</button>
        <Overview tasks={this.state.currentInput} />
      </div>
    )
  }
}

export default App;
