import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ showImages, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {showImages.map(({ id, webformatURL, largeImageURL }) => {
        const handleClick = () => onImageClick(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onImgClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
