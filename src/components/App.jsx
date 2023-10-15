import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MyLoader } from './Loader/Loader';
import { searchImg } from './api/api';
// import { fetchImages } from '../api/api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isError: null,
    searchQuery: '',
    page: 1,
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     // const images = fetchImages(this.searchQuery);
  //     // this.setState({ images });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      const { page, searchQuery } = this.state;
      try {
        const totalImg = await searchImg(page, searchQuery);
        this.setState(prevState => ({
          images: [...prevState.images, ...totalImg.hits],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSearch = query => {
    console.log(query);
    this.setState({ searchQuery: query });
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>'Whoops, something went wrong'</p>}
        {isLoading && <MyLoader />}
        {images.length > 0 && (
          <ImageGallery images={this.state.images} totalImg={this.totalImg} />
        )}
        {images.length > this.perPage && <LoadMoreBtn />}
      </>
    );
  }
}
