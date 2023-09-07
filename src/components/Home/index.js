import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-route">
          <h1>Home Route</h1>
        </div>
      </>
    )
  }
}

export default Home
