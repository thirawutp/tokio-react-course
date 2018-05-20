import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <h1>HELLO REACT</h1>
    )
  }
}

const elem = document.getElementById('app')

ReactDOM.render(<App/>, elem)