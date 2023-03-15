import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  generateRandom = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg">
        <div className="content">
          <h1 className="head1">Count {count}</h1>
          <p className="head2">Count is {isEven}</p>
          <button
            onClick={this.generateRandom}
            type="button"
            className="button"
          >
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
