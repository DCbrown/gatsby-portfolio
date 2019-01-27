import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/donovan.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img className="image avatar" src={avatar} alt="Donovan Brown" />
                    <h1>Hi, I'm <strong><u>Donovan Brown</u></strong>, Web Developer, Mobile Applications Developer, occasional Mentor and Technology Instructor located in Michigan.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
