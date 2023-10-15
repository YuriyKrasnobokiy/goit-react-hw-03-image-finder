import React from 'react';

export const ImageGalleryItem = ({ image }) => {
  const { largeImageURL, webformatURL, id, tags } = image;
  return (
    <>
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};
