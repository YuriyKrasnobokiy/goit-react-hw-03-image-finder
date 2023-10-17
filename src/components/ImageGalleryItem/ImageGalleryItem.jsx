import { GalleryImg } from 'components/ImageGallery/ImageGallery.Styled';
import { ModalImage } from 'components/Modal/Modal';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryImg
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <ModalImage
          isOpenModal={isModalOpen}
          largeImg={image.largeImageURL}
          isCloseModal={this.closeModal}
          tags={image.tags}
        />
      </>
    );
  }
}
