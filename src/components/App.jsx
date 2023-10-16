import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { searchImg } from './api/api';
import { MyLoader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
// import { fetchImages } from '../api/api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isError: null,
    searchQuery: '',
    page: 1,
    loadMore: false,
    largeImageURL: null,
    tags: null,
    showModal: false,
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
      this.setState({ isLoading: true });
      try {
        const totalImg = await searchImg(page, searchQuery);
        this.setState(prevState => ({
          images: [...prevState.images, ...totalImg.hits],
          loadMore: page < Math.ceil(totalImg.totalHits / 12),
        }));
      } catch (error) {
        console.log(error);
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

  handlerRecieveImg = (tags, largeImageURL) => {
    // console.log(largeImageURL);
    this.setState({
      tags: tags,
      largeImageURL: largeImageURL,
      showModal: true,
    });
  };

  handleModalToggle = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, error, loadMore, showModal } = this.state;
    // console.log(this.state.showModal);
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>'Whoops, something went wrong'</p>}
        {isLoading && <MyLoader />}
        {images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            // totalImg={this.totalImg}
            onPicClick={this.handlerRecieveImg}
          />
        )}
        {showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            onClose={this.handleModalToggle}
          />
        )}
        {loadMore && <LoadMoreBtn handlerClick={this.handlerClick} />}
      </>
    );
  }
}
