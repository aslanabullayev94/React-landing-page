import React, { Component } from 'react';
import '../styles/ButtonEl.css';

class ButtonEl extends Component {
    render() {
        return (
            <div className="ButtonEl">
                <button className="ButtonEl-btn">Search</button>
            </div>
        )
    }
}

export default ButtonEl;