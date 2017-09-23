import React, { Component } from 'react'

class Scrollable extends Component {
  constructor(props) {
    super(props)
    const el = document.getElementById('scrolly-div')
    const pos = el.getBoundingClientRect()
    const left = pos.left
    const top = pos.top
    console.log(left, top)
  }
  handleScroll = () => {
    this.setState({
      position: -top
    })
  }

  render() {
    return (
      <div>
        <p>Testing Testing Testing Testing Testing Testing</p>
        <p>Testing Testing Testing Testing Testing Testing</p>
        <p>Testing Testing Testing Testing Testing Testing</p>
        <p>Testing Testing Testing Testing Testing Testing</p>
        <p>Testing Testing Testing Testing Testing Testing</p>
      </div>
    )
  }
}

export default Scrollable
