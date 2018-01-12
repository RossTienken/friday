import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  display = () => {
    return(
      <div>
        <img src=`../public/images/${}` />
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body display={this.display}/>
        <Footer />
      </div>
    )
  }
}

export default App
