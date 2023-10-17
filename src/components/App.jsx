import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import { searchImg } from './api/api';
import { MyLoader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isError: false,
    searchQuery: '',
    page: 1,
    loadMore: false,
    largeImageURL: null,
    tags: null,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      const { page, searchQuery } = this.state;
      this.setState({ isLoading: true });
      try {
        const totalImg = await searchImg(page, searchQuery);
        this.setState(prevState => ({
          images: [...prevState.images, ...totalImg.hits],
          loadMore: page < Math.ceil(totalImg.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearch = query => {
    console.log(query);
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handlerClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { images, isLoading, isError, loadMore } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isError &&
          toast.error('Whoops, something went wrong', {
            duration: 3000,
            position: 'top-right',
          })}

        {isLoading && <MyLoader />}

        {images.length > 0 && <ImageGallery images={this.state.images} />}

        {loadMore && <LoadMoreBtn handlerClick={this.handlerClick} />}
        <Toaster />
      </>
    );
  }
}
