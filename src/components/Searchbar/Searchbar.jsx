import React, { Component } from 'react';
import { SearchBar, SearchBtn } from './SearchBar.Styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  handleSearchSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return 'Введіть пошуковий запит!';
    }
    this.props.onSubmit(this.state.query);
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
