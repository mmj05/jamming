import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  handleNameChange = (name) => {
    this.props.onNameChange(name);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={(e) => this.handleNameChange(e.target.value)} placeholder={this.props.playlistName}/>
        <TrackList 
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;