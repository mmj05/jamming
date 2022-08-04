import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "I want it that way",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 2,
          name: "Show me the meaning",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 3,
          name: "Everybody",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 4,
          name: "As long as you love me",
          artist: "Backstreet Boys",
          album: "Unknown"
        }
      ],
      playlistName: "Random",
      playlistTracks: [
        {
          id: 1,
          name: "I want it that way",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 2,
          name: "Show me the meaning",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 3,
          name: "Everybody",
          artist: "Backstreet Boys",
          album: "Unknown"
        },
        {
          id: 4,
          name: "As long as you love me",
          artist: "Backstreet Boys",
          album: "Unknown"
        }
      ]
    }
  }

  addTrack = (track) => {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              isRemoval={false}
              searchResults={this.state.searchResults}
            />
            <Playlist
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
