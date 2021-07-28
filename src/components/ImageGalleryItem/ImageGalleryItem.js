import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, onImageClick }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={s.ImageGalleryItem}
        onClick={onImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
