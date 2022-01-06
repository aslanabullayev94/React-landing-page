import React, { Component } from 'react'
import Navbar from './Navbar'
import Body from './Body'
import SearchForm from './SearchForm'
import '../styles/Page.css'

class Page extends Component {
    render() {
        return (
            <div className="Page">
                <div className="Page-overlay"></div>
                <div className="Page-container">
                    <Navbar />
                    <Body />
                    <SearchForm />
                </div>
            </div>
        )
    }
}

export default Page;