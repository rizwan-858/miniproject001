import {Component} from 'react'

import './index.css'

class Counter extends Component {
  onIncrement = () => {
    const {incCount} = this.props
    incCount()
  }

  onDecrement = () => {
    const {decCount} = this.props
    decCount()
  }

  render() {
    const {count} = this.props
    return (
      <div className="btnContainer">
        <button
          data-testid="decrement-count"
          className="btn"
          type="button"
          onClick={this.onDecrement}
        >
          -
        </button>
        <div data-testid="active-count">{count}</div>
        <button
          data-testid="increment-count"
          className="btn"
          type="button"
          onClick={this.onIncrement}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
