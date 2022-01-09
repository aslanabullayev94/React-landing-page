import React, { Component } from 'react';
import SelectEl from './SelectEl';
import DateEl from './DateEl';
// import ButtonEl from './ButtonEl';
import '../styles/SearchForm.css'

class SearchForm extends Component {
    render() {
        let selectData = {
            data1: [
                { icons: 'fas fa-house-user' },
                { optionText: ['London / North London', 'London / South London'] },
                { labelText: 'Accomodation' }
            ],
            data2: [
                { icons: 'fas fa-user-alt' },
                { optionText: ['2 Adults', '3 Adults', '4 Adults'] },
                { labelText: 'Guests' }
            ]
        }

        return (
            <div className="SearchForm">
            <div className="form-header">
                <h4>Book your vacation</h4>
            </div>
                <form className="SearchForm-form" onSubmit={(event) =>{
                    event.preventDefault();
                }}>
                    <div className="form-body">
                        <SelectEl
                            className="form-body-el"
                            data={selectData.data1}
                        />
                        <SelectEl
                            className="form-body-el"
                            data={selectData.data2}
                        />
                        <DateEl
                            className="form-body-el"
                            data={selectData.data2}
                        />
                    </div>
                    <div className="ButtonEl">
                        <button
                            type="submit"
                            className="ButtonEl-btn">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchForm;