import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderButton() {
    const button = this.props.isRemoval ? 
                  <button className="Track-action" onClick={this.removeTrack}>-</button> : 
                  <button className="Track-action" onClick={this.addTrack}>+</button>;

    return button;
  }
  
  addTrack = () => {
    this.props.onAdd(this.props.track);
  }

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artists} | {this.props.track.album}</p>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

export default Track;