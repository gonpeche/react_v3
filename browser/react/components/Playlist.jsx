import React from 'react';
import Songs from './Songs'

class Playlist extends React.Component {
    componentDidMount() {
        this.props.selectPlaylist(this.props.playlistId)
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.playlistId !== this.props.playlistId) {
            this.props.selectPlaylist(nextProps.playlistId)
        }
    }
    render () {
        const { playlist } = this.props;
        return (
            <div>
                <h3>{ playlist.name }</h3>
                <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
                <hr />
            </div>
        )
    }
}

export default Playlist;