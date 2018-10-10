import React from 'react';
import NewPlayList from '../components/NewPlayList'

class NewPlaylistContainer extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           input: '',
           valid: true,
           message: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
   }

   handleChange(evento) {
        let input = evento.target.value;
        this.setState({ input });
        
        if (input.length === 0) {
            this.setState({
              valid: false,
              message: 'Name is required.'
            });
          } else if (input.length > 16) {
            this.setState({
              valid: false,
              message: 'Name cannot be more than 16 characters long.'
            });
          } else {
            this.setState({
              valid: true,
              message: ''
            });
          }
   }

   handleSubmit(submit) {
        submit.preventDefault();
        this.setState({
            input: ''
        });

    
       console.log(this.state.input)
   }
   render() {
       return (
           <div>
           <NewPlayList mensaje={this.state.message} valid={this.state.valid} inputValue={this.state.input} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
           </div>
       )
   }
}

export default NewPlaylistContainer;