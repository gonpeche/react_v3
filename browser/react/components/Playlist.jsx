import React from 'react';
import Songs from './Songs'

class Playlist extends React.Component {
    constructor(props){
        super(props)
    }
    

    componentDidMount() {
        this.props.selectPlaylist(this.props.playlistId)
    }
    render () {
        console.log('playlists:',this.props.playlist)
        return (
            <div>
            <h3>playlist.name</h3>
            <Songs  /> {/** Hooray for reusability! */}
            <hr />
            </div>
        )
    }
}

{
    // <div>
        // <h3>{ playlist.name }</h3>
        // <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        // { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        // <hr />
    // </div>
}
export default Playlist;