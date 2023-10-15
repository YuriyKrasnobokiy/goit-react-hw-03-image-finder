import React from 'react';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, id, tags } = image;
  return (
    <>
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};
