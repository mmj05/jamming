import React from 'react';
import './Track.css';

class Track extends React.Component {
  
  addTrack = () => {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist}</p>
          <p>{this.props.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack}>+</button>
      </div>
    );
  }
}

export default Track;