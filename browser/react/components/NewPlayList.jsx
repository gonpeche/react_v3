import React from 'react';

class NewPlayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (evt) {
        evt.preventDefault()
        console.log(evt)
        const value = evt.target.value;
        this.setState({
           inputValue: value
        });
        console.log(evt.target.value)
    }

    render() {
        return (
            <div className="well">
              <form className="form-horizontal" value='Submit' onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>New Playlist</legend>
                  <div className="form-group">
                    <label className="col-xs-2 control-label">Name</label>
                    <div className="col-xs-10">
                      <input className="form-control" type="text"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-10 col-xs-offset-2">
                      <button type="submit" className="btn btn-success">Create Playlist</button>
                    </div>
                  </div>
                </fieldset>
              </form>
        
        
            </div>
        )

    }

}


export default NewPlayList;