import React, { Component } from 'react'
import Navbar from './Navbar'
import './styles/Page.css'
import bgImage from './images/bg-image.png'

class Page extends Component {
    render() {
        return (
            <div
                className="Page"
                style={{ backgroundImage: 'url(' + bgImage + ')' }}
            >
                <div className="Page-overlay"></div>
                <div className="Page-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Page;