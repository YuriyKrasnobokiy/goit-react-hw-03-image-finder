import React from 'react';
import { Overlay, ModalDiv } from './Modal.Styled';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalDiv>
        <img src={largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>
  );
};
