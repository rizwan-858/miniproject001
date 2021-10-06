import Header from '../Header'

import './index.css'

window.scrollTo(0, 0)

const NotFound = props => {
  const {history} = props

  const notFoundHomePage = () => {
    history.replace('/')
  }

  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-card-container">
          <img
            src="https://res.cloudinary.com/rizwan987/image/upload/v1633273078/erroring_1_rxkz0k.png"
            alt="error logo"
            className="not-found-image"
          />
          <h1 className="not-found-heading">PAGE NOT FOUND</h1>
          <p className="not-found-description">
            we are sorry, the page you requested could not be found Please go
            back to Homepage
          </p>
          <button
            type="button"
            className="not-found-custom-button"
            onClick={notFoundHomePage}
          >
            Home Page
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFound
