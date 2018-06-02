import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import FacebookLogin from 'react-facebook-login'
import { Line, Bar } from 'react-chartjs-2'
import { Row, Col } from 'react-bootstrap'
import logo from './logo.svg'
import FormOrder from './containers/FormOrder'
import FormUser from './containers/FormUser'
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

  getDataList1() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
    return data
  }

  getDataList2() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(23,162,184,0.2)',
          borderColor: 'rgba(23,162,184,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(23,162,184,0.8)',
          hoverBorderColor: 'rgba(23,162,184,0.2)',
          data: [15, 22, 55, 3, 46, 53, 14]
        }
      ]
    }
    return data
  }

  getDataList3() {
    const randomRGB = (a) => {
      return `rgba(${Math.random()*200},${Math.random()*200},${Math.random()*200},${a})`
    }

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: randomRGB(0.2),
          borderColor: randomRGB(1),
          borderWidth: 2,
          hoverBackgroundColor: randomRGB(0.75),
          hoverBorderColor: randomRGB(1),
          data: [15, 22, 55, 3, 46, 53, 14]
        }
      ]
    }
    return data
  }

  render() {
    const { user } = this.state
    return (
      <div className="App">
        <h3>Chart</h3>
        <div className='container' >
          <Row>
            <Col xs={6} md={6} >
              <Bar data={this.getDataList1()} />
            </Col>
            <Col xs={6} md={6} >
              <Bar data={this.getDataList2()} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} >
              <Bar data={this.getDataList3()} />
            </Col>
          </Row>
        </div>
      </div >
    )
  }
}

export default withCookies(App)
