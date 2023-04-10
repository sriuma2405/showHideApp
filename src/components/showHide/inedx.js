// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  render() {
    const {isFirst, isLast} = this.state

    this.onClickFirst = () => {
      this.setState(PrevState => ({isFirst: !PrevState.isFirst}))
    }

    this.onClickLast = () => {
      this.setState(PrevState => ({isLast: !PrevState.isLast}))
    }

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div>
              <button
                className="button"
                type="button"
                onClick={this.onClickFirst}
              >
                Show/Hide Firstname
              </button>
              {isFirst && <p className="name">Joe</p>}
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClickLast}
              >
                Show/Hide Lastname
              </button>
              {isLast && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
