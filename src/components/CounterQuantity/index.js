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
      <div className="btnCon">
        <button
          data-testid="decrement-quantity"
          className="btn"
          type="button"
          onClick={this.onDecrement}
        >
          -
        </button>
        <div data-testid="item-quantity">{count}</div>
        <button
          data-testid="increment-quantity"
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
