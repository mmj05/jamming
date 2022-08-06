import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  handleNameChange = (value) => {
    this.props.onNameChange(value);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={(e) => this.handleNameChange(e.target.value)} defaultValue={'New Playlist'}/>
        <TrackList 
          tracks={this.props.playlistTracks}
          isRemoval={this.props.isRemoval}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;