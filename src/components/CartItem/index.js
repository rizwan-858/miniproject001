import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import Counter from '../Counter'
import MainContext from '../../context/MainContext'
import './index.css'

class CartItem extends Component {
  renderCartItemCount = name => (
    <MainContext.Consumer>
      {value => {
        const {cartList, increaseCount, decreaseCount} = value
        const incItemCount = () => {
          const {item} = this.props
          increaseCount(item.name)
        }
        const decItemCount = () => {
          const {item} = this.props
          decreaseCount(item.name)
        }
        const itemInCart = cartList.filter(each => each.name === name)

        return (
          <Counter
            id={itemInCart[0].id}
            incCount={incItemCount}
            decCount={decItemCount}
            count={itemInCart[0].count}
          />
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    const {item} = this.props
    return (
      <div className="CartItemMain">
        <img className="CartItemImg" alt="foodItem" src={item.imageUrl} />
        <div className="QAndP">
          <h1 className="CartItemName">{item.name}</h1>
          <div className="CounterComp">
            {this.renderCartItemCount(item.name)}
          </div>
          <h1 className="CartItemCost">
            <BiRupee />
            {item.count * item.cost}.00
          </h1>
        </div>
      </div>
    )
  }
}
export default CartItem
