import React, { Component } from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main />
      </React.Fragment>
    )
  }
}

export default App
