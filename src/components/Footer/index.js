import {Component} from 'react'
import {
  FaPinterestSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="FooterMain">
        <div className="FooterLogoCon">
          <img
            className="FooterLogo"
            alt="website-footer-logo"
            src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633020655/tastyKitchen/Group_7420_ervtdz.png"
          />
          <h1>Tasty Kitchen</h1>
        </div>
        <p className="Motto">
          The only thing we are serious about is food. Contact us on
        </p>
        <div className="SocialNetworkIcon">
          <FaPinterestSquare data-testid="pintrest-social-icon" />
          <FaInstagram data-testid="instagram-social-icon" />
          <FaTwitter data-testid="twitter-social-icon" />
          <FaFacebookSquare data-testid="facebook-social-icon" />
        </div>
      </div>
    )
  }
}
export default Footer
