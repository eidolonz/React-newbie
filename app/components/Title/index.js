import React, { Component } from 'react'
import './index.scss'

class Title extends Component {

  render() {
    const { text } = this.props
    return (<div className='title'>{text}</div>)
  }
}

export default Title
