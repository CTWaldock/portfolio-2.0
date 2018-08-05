import React, { Component } from 'react';
import './styles/AboutStyle.css'

class About extends Component {
    render() {
        return (
            <div className={'AboutContainer'}>
                <div className={'ImgPosition'}>
                    <img className={'ImgStyle'} src={require('../assets/profile.png')} />
                </div>
                <div className={'AboutTextPosition'}>
                    <h1 className={'AboutHeaderText'}>hello</h1>
                </div>
            </div>
        )
    }
}

export default About;
