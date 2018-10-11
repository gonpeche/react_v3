import React from 'react';
import NewPlayList from '../components/NewPlayList'
import axios from 'axios'

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
              message: 'Nombre es requerido.'
            });
          } else if (input.length > 16) {
            this.setState({
              valid: false,
              message: 'Nombre no puede ser mayor a 16 caracteres.'
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
        console.log(this.state.input)
        this.props.addPlaylist(this.state.input)
        
        this.setState({
            input: ''
        });
    
   }
   render() {
       return (
           <div className="contenedorPlaylist">
           <NewPlayList mensaje={this.state.message} valid={this.state.valid} inputValue={this.state.input} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
           </div>
       )
   }
}

export default NewPlaylistContainer;