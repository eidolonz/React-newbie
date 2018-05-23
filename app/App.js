import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import FacebookLogin from 'react-facebook-login'
import logo from './logo.svg'
import { Title } from './components'
import ChoicesContainer from './containers/ChoicesContainer'
import './App.scss'

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
  }

  responseFacebook(response) {
    const { cookies } = this.props
    cookies.set('userInfo', response)
  }

  showUser() {
    const { cookies } = this.props
    const user = cookies.get('userInfo')
    this.setState({
      user
    })
  }

  render() {
    const { user } = this.state
    return (
      <div className="App">
        <FacebookLogin
          appId="173270656655251"
          autoLoad={true}
          fields="name,email,picture"
          callback={(res) => {
            this.responseFacebook(res)
          }}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={user.picture ? user.picture.data.url : ''} />
        <div>
          name : {user.name}
        </div>
        <button onClick={() => {
          this.showUser()
        }}>user facebook</button>
      </div>
    )
  }
}

export default withCookies(App)