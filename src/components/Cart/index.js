import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import {FaCheckCircle} from 'react-icons/fa'
import MainContext from '../../context/MainContext'
import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'

import './index.css'

class Cart extends Component {
  state = {
    orderPlace: false,
  }

  onOrderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderCart = () => (
    <MainContext.Consumer>
      {value => {
        const {cartList, clearCartList} = value
        const {orderPlace} = this.state
        const totalCost = () => {
          const priceList = cartList.map(each => each.count * each.cost)
          const reducer = (previousValue, currentValue) =>
            previousValue + currentValue
          const price = priceList.reduce(reducer)
          return (
            <h1
              className="Rupees"
              data-testid="total-price"
            >{`${price}.00`}</h1>
          )
        }
        const onOrderPlaced = () => {
          localStorage.clear()
          this.setState(prevState => ({
            orderPlace: !prevState.orderPlace,
          }))
          clearCartList()
        }

        if (cartList.length === 0 && orderPlace === false) {
          return (
            <div className="NoItem">
              <img
                className="EmptyImg"
                alt="empty cart"
                src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633225925/tastyKitchen/Layer_2_pt2cfs.png"
              />
              <h1 className="NoOrder">No Orders Yet!</h1>
              <p className="Empty">
                Your cart is empty. Add something from the menu.
              </p>
              <button
                className="OrderBtn"
                onClick={this.onOrderNow}
                type="button"
              >
                Order Now
              </button>
            </div>
          )
        }

        if (orderPlace) {
          return (
            <div>
              <div className="PaymentMain">
                <FaCheckCircle fontSize={45} color="#22C55E" />
                <h1 className="PayHeading">Payment Successful</h1>
                <p className="ThankU">
                  Thank you for ordering <br /> Your payment is successfully
                  completed.
                </p>
                <Link to="/">
                  <button className="HomeBtn" type="button">
                    Go To Home Page
                  </button>
                </Link>
              </div>
            </div>
          )
        }
        return (
          <div className="TotalPriceCon">
            <div className="PriceCon">
              <ul className="CartHeading">
                <li>Item</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
              <ul className="CartItemsList">
                {cartList.map(each => (
                  <li className="CartItemLi" key={each.id}>
                    <CartItem item={each} />
                  </li>
                ))}
              </ul>
              <hr className="Hr" />
              <div className="PriceLine">
                <h1 className="Cost">Order Total :</h1>
                <div className="Rupees">
                  <BiRupee /> {totalCost()}
                </div>
              </div>
              <button
                className="PlaceOrder"
                onClick={onOrderPlaced}
                type="button"
              >
                Place Order
              </button>
            </div>
            <Footer />
          </div>
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    return (
      <div className="CartMain">
        <Header />
        <div className="CartCon">{this.renderCart()}</div>
      </div>
    )
  }
}

export default withRouter(Cart)
