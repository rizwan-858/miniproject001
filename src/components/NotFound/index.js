import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notFoundCon">
      <img
        src="https://res.cloudinary.com/rizwan987/image/upload/v1633273078/erroring_1_rxkz0k.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <Link to="/">
        <button type="button" className="logoutBtn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
