import React from 'react';
import { GalleryList } from './ImageGallery.Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onPicClick }) => {
  return (
    <>
      <GalleryList>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              images={image}
              onClickImg={onPicClick}
            />
          );
        })}
      </GalleryList>
    </>
  );
};
