import React, { Component } from 'react';
import '../styles/DateEl.css';

class DateEl extends Component {
    render() {
        return (
            <div className="DateEl">
                <div className="DateEl-header">
                    <i className="fas fa-house-user"></i>
                    <label>check-in</label>
                </div>
                <input className="DateEl-date" type="date"></input>
            </div>
        )
    }
}

export default DateEl; 