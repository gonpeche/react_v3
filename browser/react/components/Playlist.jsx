import React from 'react';

class Playlist extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    

    componentDidMount() {
        console.log(this.props.playlistId)
        this.props.selectPlaylist(this.props.playlistId)
    }
    render () {
        return (
            <div>
            {
                // <h3>{ playlist.name } HOLA </h3>
                // <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                // { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
                // <hr />

            }
            </div>
        )
    }
}

export default Playlist;