import React from 'react';
import { GalleryList } from './ImageGallery.Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <GalleryList>
        {images.map(image => {
          return <ImageGalleryItem image={image} />;
        })}
      </GalleryList>
    </>
  );
};
