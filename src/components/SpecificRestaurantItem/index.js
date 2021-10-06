import {FaRupeeSign, FaStar} from 'react-icons/fa'

import './index.css'

let cartFoodItemsList = []

const SpecificRestaurantItem = props => {
  const {foodItemData} = props

  const {id, cost, imageUrl, name, rating} = foodItemData

  const onClickAdd = () => {
    const foodItem = {
      foodId: id,
      foodCost: cost,
      fixedCost: cost,
      foodImageUrl: imageUrl,
      foodName: name,
      quantity: 1,
    }

    cartFoodItemsList = [...cartFoodItemsList, foodItem]

    localStorage.setItem('food_items', JSON.stringify(cartFoodItemsList))

    const addBtnEl = document.getElementById(`addBtn${id}`)
    addBtnEl.textContent = 'ADDED'
    addBtnEl.disabled = true
  }

  return (
    <div className="specific-restaurant-item-card-container">
      <img
        src={imageUrl}
        alt={name}
        className="specific-restaurant-item-image"
      />
      <div>
        <h1 className="specific-restaurant-item-name">{name}</h1>
        <div className="specific-restaurant-item-cost-and-rupee-container">
          <FaRupeeSign className="specific-restaurant-item-rupee-icon" />
          <p className="specific-restaurant-item-cost">{cost}</p>
        </div>
        <div className="specific-restaurant-item-rating-and-star-container">
          <FaStar className="specific-restaurant-item-star-icon" />
          <p className="specific-restaurant-item-rating">{rating}</p>
        </div>
        <button
          id={`addBtn${id}`}
          type="button"
          className="specific-restaurant-item-button"
          onClick={onClickAdd}
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default SpecificRestaurantItem
