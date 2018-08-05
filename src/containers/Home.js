import React, { Component } from 'react';
import './styles/HomeStyle.css'

class Home extends Component {
  render() {
    return (
      <div className={'Container'}>
        <div className={'ButtonPosition'}>
          <div>
            <a href={''} className={'Button'}>ABOUT</a>
          </div>

          <div>
            <a href={''} className={'Button'}>PROJECTS</a>
          </div>

          <div>
            <a href={''} className={'Button'}>CONTACT</a>
          </div>
        </div>

        <div className={'TextPosition'}>
          <h1 className={'HeaderText'}>ようこそ</h1>
        </div>
      </div>
    )
  }
}

export default Home;
