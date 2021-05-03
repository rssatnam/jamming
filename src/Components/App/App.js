import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist 1", album: "album1", id: 1 },
        { name: "name2", artist: "artist 2", album: "album2", id: 2 },
        { name: "name3", artist: "artist 3", album: "album3", id: 3 },
      ],
      playlistName: "Sattu Playlist",
      playlistTracks: [
        { name: "name1", artist: "artist 1", album: "album1", id: 1 },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term) {
    console.log(term);
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    console.log("save playlist");
  }

  updatePlayListName(playlistName) {
    this.setState({ playlistName: this.state.playlistName });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({
      playlistTracks: tracks,
    });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({
      playlistTracks: tracks,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component -->*/}
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            {/*<!-- Add a Playlist component --> */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;