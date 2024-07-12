import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  onSubscrcibe = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  getbuttontext = () => {
    const {subscribed} = this.state
    return subscribed ? 'subsribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getbuttontext()
    return (
      <div className="container">
        <h1 className="heading">welcome</h1>

        <p className="para">Thankyou Happy Learning</p>

        <button className="button" onClick={this.onSubscrcibe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
