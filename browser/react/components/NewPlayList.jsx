import React from 'react';


const NewPlayList = (props) => {

    return (
        <div className="well">
            <form onSubmit={props.handleSubmit} className="form-horizontal">
                <fieldset>
                <legend>New Playlist</legend>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Name</label>
                    <div className="col-xs-10">
                    <input value={props.inputValue} onChange={props.handleChange} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-10 col-xs-offset-2">

                    {props.mensaje ? <div className="alert alert-warning">{props.mensaje}</div> : null}

                    { props.valid ?
                    <button type="submit" className="btn btn-success">Create Playlist</button>
                    :
                    <button type="submit" className="btn btn-success" disabled>Create Playlist</button>
                    }

                    </div>
                </div>
                </fieldset>
            </form>
        </div>

    )    

}


export default NewPlayList;