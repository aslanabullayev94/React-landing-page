import React, { Component } from 'react';
import '../styles/SelectEl.css';

class SelectEl extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.data[0].icons);
        // console.log(
        //     this.props.data[1].optionText.map((address) => {
        //         return address;
        //     })
        // )
        return (
            <div className="SelectEl">
                <div className="SelectEl-header">
                    <i className={this.props.data[0].icons}></i>
                    <label>{this.props.data[2].labelText}</label>
                </div>
                <select className="SelectEl-select">
                    <option value="">Select</option>
                    {this.props.data[1].optionText.map(
                        address => <option value="">{address}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default SelectEl;