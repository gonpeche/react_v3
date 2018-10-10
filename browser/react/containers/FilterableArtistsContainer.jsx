import React from 'react';
import FilterInput from '../components/FilterInput'
import Artists from '../components/Artists'

class FilterableArtistsContainer extends React.Components {
    constructor(props) {
        super(props)
        this.state = {
            inputvalue: ''
        }
    }
    render() {
        return (
            <div>
                <FilterInput/>
                <Artists artists={ this.state.artists }/>
            </div>
        )
    }
}

export default FilterableArtistsContainer