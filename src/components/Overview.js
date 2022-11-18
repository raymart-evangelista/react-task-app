// render tasks
import React, { Component } from 'react'

class Overview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <ul>
          {console.log(this.props.tasks)}
          {this.props.tasks.map((element, index) => {
            return <li key={index}>{element}</li>
          })}
        </ul>
      </div>

    )
  }
}

// Overview.defaultProps = {
//   tasks: ['No new tasks']
// }

export default Overview