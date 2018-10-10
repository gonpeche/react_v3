import React from 'react';
import FilterInput from '../components/FilterInput'
import Artists from '../components/Artists'

class FilterableArtistsContainer extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (evt) {
        const value = evt.target.value;
        this.setState({
          inputValue: value
        });
    }

    render() {
        const inputValue = this.state.inputValue
        const filteredArtists = this.props.artists.filter(artist =>
            artist.name.toLowerCase().match(inputValue.toLowerCase()));
        
        return (
            <div>
                <FilterInput handleChange={this.handleChange} />
             {console.log(filteredArtists)} 
                <Artists artists={filteredArtists} />
            </div>
        )
    }
}

export default FilterableArtistsContainer