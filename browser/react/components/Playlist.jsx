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
        console.log('playlists:',this.props)
        return (
            <div>
            <h1>HOLA</h1>
            
         {
            //  <h3>{ playlist.name } HOLA </h3>
            //  <Songs songs={playlist.name} /> {/** Hooray for reusability! */}
            //  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
            //  <hr />

         }


            
            </div>
        )
    }
}

export default Playlist;