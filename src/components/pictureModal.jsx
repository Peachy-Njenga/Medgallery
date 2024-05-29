import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const PictureModal = ({ selectedPhoto, setSelectedPhoto }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!!selectedPhoto);
  }, [selectedPhoto]);

  const handleClosePhotoModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setTimeout(() => setSelectedPhoto(null), 300); // match the transition duration
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedPhoto(null), 300); // match the transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex w-screen h-screen justify-center p-16 ${
        showModal ? "bg-gray-700 bg-opacity-50 transition-opacity duration-300" : "opacity-0"
      }`}
      onClick={handleClosePhotoModal}
      style={{ transition: "opacity 0.3s" }}
    >
      <div
        className={`relative bg-white mt-20 md:mt-10 rounded-lg shadow-lg h-96 max-w-2xl transform transition-transform duration-300 ${
          showModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          className="absolute top-2 right-2"
          onClick={handleCloseModal}
        >
          <IoClose />
        </button>
        <img
          src={selectedPhoto}
          alt="Patient Image"
          className="rounded object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default PictureModal;
