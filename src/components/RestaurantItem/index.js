import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

import './index.css'

const RestaurantItem = props => {
  const {restaurantListData} = props
  const {id, imageUrl, name, cuisine, rating, totalReviews} = restaurantListData
  return (
    <Link to={`/restaurants/${id}`} className="restaurant-item-link">
      <div className="restaurant-item-container">
        <img src={imageUrl} alt={name} className="restaurant-item-image" />
        <div>
          <h1 className="restaurant-item-name">{name}</h1>
          <p className="restaurant-item-cuisine">{cuisine}</p>
          <div className="restaurant-item-rating-container">
            <FaStar className="restaurant-item-rating-star" />
            <p className="restaurant-item-rating">{rating}</p>
            <p className="restaurant-item-reviews">{`(${totalReviews} rating)`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantItem
