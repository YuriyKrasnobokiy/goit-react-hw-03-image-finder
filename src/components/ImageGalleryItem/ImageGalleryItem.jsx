import { GalleryImg } from 'components/ImageGallery/ImageGallery.Styled';
import React from 'react';

export const ImageGalleryItem = ({ images, onClickImg }) => {
  const { webformatURL, id, tags, largeImageURL } = images;
  // console.log(largeImageURL);
  const sendPic = () => {
    onClickImg(tags, largeImageURL);
  };

  return (
    <>
      <li key={id}>
        <GalleryImg src={webformatURL} alt={tags} onClick={sendPic} />
      </li>
    </>
  );
};

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#root');

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

// render() {
//   // const { images } = this.props;
//   console.log(this.props.images);
//   return this.props.images.map(image => {
//     return (
//       <li key={image.id}>
//         <img
//           src={image.webformatURL}
//           alt={image.tags}
//           onClick={() => this.openModal(image)}
//         />
//       </li>
//     );
//   });

// <div>
//   <Modal
//     isOpen={this.state.isModalOpen}
//     onRequestClose={this.closeModal}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <>
//       <img
//         src={this.state.selectedImage.largeImageURL}
//         alt={this.state.selectedImage.tags}
//       />
//       <button onClick={this.closeModal}>Close Modal</button>
//     </>
//   </Modal>
// </div>
//   }
// }
