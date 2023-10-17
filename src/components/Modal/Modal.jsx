// import React from 'react';
// import { Overlay, ModalDiv } from './Modal.Styled';

// export const Modal = ({ largeImageURL, tags, onClose }) => {
//   return (
//     <Overlay onClick={onClose}>
//       <ModalDiv>
//         <img src={largeImageURL} alt={tags} />
//       </ModalDiv>
//     </Overlay>
//   );
// };

import { Component } from 'react';
import Modal from 'react-modal';
// import { Overlay } from './Modal.Styled';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';
Modal.defaultStyles.overlay.border = 'rgba(0, 0, 0, 0.8)';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export class ModalImage extends Component {
  onModalCLose = e => {
    if (e.target === e.currentTarget) {
      this.props.isCloseModal();
    }
  };

  render() {
    const { isOpenModal, tags, largeImg } = this.props;
    return (
      <>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={this.onModalCLose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImg} alt={tags} />
        </Modal>
      </>
    );
  }
}
