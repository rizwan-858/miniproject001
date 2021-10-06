import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import {FaRupeeSign} from 'react-icons/fa'

import Header from '../Header'

import Footer from '../Footer'

import CartItem from '../CartItem'

import './index.css'

class Cart extends Component {
  state = {totalAmount: 0, getFoodItemsData: null}

  componentDidMount() {
    const getFoodItemsList = localStorage.getItem('food_items')

    const foodItemsList = JSON.parse(getFoodItemsList)

    this.setState({getFoodItemsData: foodItemsList})
  }

  showTotalAmount = () => {
    const {getFoodItemsData} = this.state

    const amountList = getFoodItemsData.map(eachItem => eachItem.foodCost)

    const amount = amountList.reduce((a, b) => a + b)
    this.setState({totalAmount: amount})
  }

  updatedAddTotalAmount = amount => {
    this.setState(prevState => ({totalAmount: prevState.totalAmount + amount}))
  }

  updatedSubTotalAmount = amount => {
    this.setState(prevState => ({totalAmount: prevState.totalAmount - amount}))
  }

  onClickConfirm = () => {
    localStorage.removeItem('food_items')

    const {history} = this.props

    history.replace('/payment-successful')
  }

  orderNowClicked = () => {
    const {history} = this.props

    history.replace('/')
  }

  renderEmptyCart = () => (
    <div className="empty-card-container">
      <img
        src="https://res.cloudinary.com/rizwan987/image/upload/v1633272729/cooking_1_cq8czz.png"
        alt="cooking"
        className="cooking-image"
      />
      <h1 className="empty-cart-heading">No Orders Yet!</h1>
      <p className="empty-cart-description">
        Your cart is empty. Add something from the menu.
      </p>
      <button
        type="button"
        className="order-now-button"
        onClick={this.orderNowClicked}
      >
        Order Now
      </button>
    </div>
  )

  renderCartComponents = () => {
    const {totalAmount, getFoodItemsData} = this.state

    if (totalAmount === 0) {
      this.showTotalAmount()
    }

    return (
      <>
        <div className="cart-bg-container">
          <ul className="cart-header-container">
            <li className="cart-heading">Item</li>
            <li className="cart-heading">Quantity</li>
            <li className="cart-heading">Price</li>
          </ul>
          <div className="cart-food-items-container">
            {getFoodItemsData.map(eachItem => (
              <CartItem
                key={eachItem.foodId}
                foodItemList={eachItem}
                updatedAddTotalAmount={this.updatedAddTotalAmount}
                updatedSubTotalAmount={this.updatedSubTotalAmount}
              />
            ))}
          </div>
          <p className="cart-dashed-border">{}</p>
          <div className="cart-order-total-container">
            <h1 className="cart-order-total-text">Order Total:</h1>
            <h1 className="cart-order-total-amount">
              <FaRupeeSign className="cart-total-rupee" />
              {totalAmount}.00
            </h1>
          </div>
        </div>
        <div className="cart-confirm-button-container">
          <button
            type="button"
            className="confirm-order-button"
            onClick={this.onClickConfirm}
          >
            Confirm Order
          </button>
        </div>
        <Footer />
      </>
    )
  }

  render() {
    const {getFoodItemsData} = this.state

    return (
      <>
        <Header chosen="cart" />
        {getFoodItemsData === null
          ? this.renderEmptyCart()
          : this.renderCartComponents()}
      </>
    )
  }
}

export default withRouter(Cart)
