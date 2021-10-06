import {Component} from 'react'

import {FaRupeeSign, FaStar} from 'react-icons/fa'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'

import Footer from '../Footer'

import SpecificRestaurantItem from '../SpecificRestaurantItem'

import './index.css'

class SpecificRestaurant extends Component {
  state = {
    specificRestaurantData: {},
    foodItemsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getSpecificRestaurantData()
  }

  convertResponseData = data => {
    const restaurantDetails = {
      id: data.id,
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      imageUrl: data.image_url,
      location: data.location,
      name: data.name,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }

    this.setState({specificRestaurantData: restaurantDetails})
  }

  convertResponseFoodItemsData = data => {
    const foodItemsDetails = data.food_items.map(eachItem => ({
      id: eachItem.id,
      cost: eachItem.cost,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      rating: eachItem.rating,
    }))

    this.setState({foodItemsData: foodItemsDetails, isLoading: false})
  }

  getSpecificRestaurantData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    this.convertResponseData(data)
    this.convertResponseFoodItemsData(data)
  }

  renderLoaderSpinner = () => (
    <div className="specific-restaurant-loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  renderSpecificRestaurantComponents = () => {
    const {specificRestaurantData, foodItemsData} = this.state

    const {
      costForTwo,
      name,
      cuisine,
      imageUrl,
      location,
      rating,
      reviewsCount,
    } = specificRestaurantData

    return (
      <>
        <div className="specific-restaurant-container">
          <img
            src={imageUrl}
            alt={name}
            className="specific-restaurant-image"
          />
          <div className="specific-restaurant-card-bg-container">
            <h1 className="specific-restaurant-name">{name}</h1>
            <p className="specific-restaurant-cuisine">{cuisine}</p>
            <p className="specific-restaurant-location">{location}</p>
            <div className="specific-restaurant-rating-and-cost-container">
              <div className="specific-restaurant-rating-container">
                <div className="specific-restaurant-rating-and-icon-container">
                  <FaStar className="star-icon-white" />
                  <p className="specific-restaurant-rating">{rating}</p>
                </div>
                <p className="specific-restaurant-ratings-count">{`${reviewsCount}+ Ratings`}</p>
              </div>
              <div className="specific-restaurant-cost-for-two-container">
                <div className="specific-restaurant-cost-and-icon-container">
                  <FaRupeeSign className="rupee-icon-white" />
                  <p className="specific-restaurant-cost-for-two">
                    {costForTwo}
                  </p>
                </div>
                <p className="specific-restaurant-cost-for-two-text">
                  Cost for two
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="specific-restaurant-item-container">
          {foodItemsData.map(eachItem => (
            <SpecificRestaurantItem key={eachItem.id} foodItemData={eachItem} />
          ))}
        </div>
      </>
    )
  }

  render() {
    window.scrollTo(0, 0)

    const {isLoading} = this.state
    return (
      <div className="main-top-specific-restaurant-container">
        <Header choosen="home" />
        {isLoading
          ? this.renderLoaderSpinner()
          : this.renderSpecificRestaurantComponents()}
        <Footer />
      </div>
    )
  }
}

export default SpecificRestaurant
