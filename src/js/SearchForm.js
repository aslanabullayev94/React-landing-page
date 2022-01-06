import React, { Component } from 'react';
import SelectEl from './SelectEl';
import DateEl from './DateEl';
import ButtonEl from './ButtonEl';
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
                { optionText: ['Manchester / East London', 'Manchester / West London'] },
                { labelText: 'Guests' }
            ]
        }

        return (
            <div className="SearchForm">
                <form id="SearchForm-form">
                    <div className="form-header">
                        <h4>Book your vacation</h4>
                    </div>
                    <div className="form-body">
                        <SelectEl
                            className="form-body-el"
                            data={selectData.data1}
                        />

                        <DateEl className="form-body-el" />
                        <DateEl className="form-body-el" />

                        <SelectEl
                            className="form-body-el"
                            data={selectData.data2}
                        />
                        <ButtonEl
                            className="form-body-el"
                        />
                    </div>
                    {/* <ButtonEl /> */}
                </form>
            </div>
        )
    }
}

export default SearchForm;