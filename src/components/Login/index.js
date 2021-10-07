import {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onLoginSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  onLoginFailure = msg => {
    this.setState(prevState => ({
      errorMsg: msg,
      showError: !prevState.showError,
    }))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onEnterUsername = event => {
    this.setState({username: event.target.value, showError: false})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value, showError: false})
  }

  render() {
    const {showError, errorMsg, username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginMain">
        <div className="small">
          <h1 className="smallLoginName">Login</h1>
          <img
            className="smallLander"
            alt="website logo"
            src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1632741497/tastyKitchen/Rectangle_1457_g9q8hv.png"
          />
        </div>
        <div className="loginCon">
          <div className="formCon">
            <form onSubmit={this.onSubmitForm}>
              <div className="logoCon">
                <img
                  alt="website logo"
                  src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1632732181/tastyKitchen/Group_7420_vfqhmf.png"
                />
                <h1 className="logoName">Tasty Kitchens</h1>
                <h1 className="loginName">Login</h1>
              </div>

              <div className="inputCon">
                <label htmlFor="username">USERNAME</label>
                <input
                  onChange={this.onEnterUsername}
                  className="input"
                  value={username}
                  type="input"
                  id="username"
                />
              </div>
              <div className="inputCon">
                <label htmlFor="password">PASSWORD</label>
                <input
                  onChange={this.onEnterPassword}
                  className="input"
                  value={password}
                  type="password"
                  id="password"
                />
              </div>
              {showError ? <p className="errorMsg">{errorMsg}</p> : null}
              <button className="loginBtn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="lander">
          <img
            className="landerImg"
            alt="website login"
            src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1632732192/tastyKitchen/Rectangle_1456_enpzse.png"
          />
        </div>
      </div>
    )
  }
}

export default Login
