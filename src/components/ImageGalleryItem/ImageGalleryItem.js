import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, onImageClick }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={s.ImageGalleryItemImage}
        onClick={onImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
