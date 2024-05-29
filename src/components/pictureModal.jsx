import React from "react";

const PictureModal = ({ selectedPhoto, setSelectedPhoto }) => {
  const handleClosePhotoModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedPhoto(null);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClosePhotoModal}
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-4">
        <img src={selectedPhoto} alt="Patient Image" className="rounded" />
        <p></p>
      </div>
    </div>
  );
};

export default PictureModal;
