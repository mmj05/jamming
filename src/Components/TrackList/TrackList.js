import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track =>
          <Track 
            onRemove={this.props.onRemove}
            track={track}
            onAdd={this.props.onAdd}
            isRemoval={this.props.isRemoval}
            key={track.id} 
            name={track.name}
            artist={track.artist}
            album={track.album} />)}
      </div>
    );
  }
}

export default TrackList;