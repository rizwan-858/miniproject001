import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-website-container">
      <img
        src="https://res.cloudinary.com/rizwan987/image/upload/v1633272401/footerLogo_btgo3d.png"
        alt="website-footer-logo"
        className="footer-website-logo"
      />
      <h1 className="footer-website-name">Tasty Kitchens</h1>
    </div>
    <p className="footer-website-desktop-description">
      The only thing we are are serious about is food.
    </p>
    <p className="footer-website-mobile-description">
      The only thing we are are serious about is food. Contact us on
    </p>
    <div className="footer-social-media-container">
      <FaPinterestSquare
        testId="pintrest-social-icon"
        className="footer-social-media-icon"
      />
      <FaInstagram
        testId="instagram-social-icon"
        className="footer-social-media-icon"
      />
      <FaTwitter
        testId="twitter-social-icon"
        className="footer-social-media-icon"
      />
      <FaFacebookSquare
        testId="facebook-social-icon"
        className="footer-social-media-icon"
      />
    </div>
  </div>
)

export default Footer
