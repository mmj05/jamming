import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchTerm: ''
  }

  search = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  handleTermChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;