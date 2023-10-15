import React, { Component } from 'react';
import { SearchBar, SearchBtn } from './SearchBar.Styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = evt => {
    // console.log(evt.target.value);
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  handleSearchSubmit = evt => {
    // console.log(evt.target.elements.searchQuery.value);
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return 'Введіть пошуковий запит!';
    }
    this.props.onSubmit(this.state.query);
    // this.setState({ query: evt.target.elements.searchQuery.value });
  };

  render() {
    return (
      <header>
        <SearchBar onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />

          <SearchBtn type="submit">
            <span>Search</span>
          </SearchBtn>
        </SearchBar>
      </header>
    );
  }
}
