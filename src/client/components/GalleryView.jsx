import React, { useState } from "react";
import { useParams } from "react-router-dom";
import images from "./image";
import "../style/GalleryView.css";

const GalleryView = () => {
  const { folderName } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = Object.entries(images).filter(([key]) =>
    key.startsWith(`${folderName}/`)
  );

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-container">
        {filteredImages.map(([key, src]) => (
          <div
            key={key}
            className="image-wrapper"
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`Image ${key}`} className="thumbnail" />
          </div>
        ))}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="enlarged-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryView;
