import React from "react";
import useFireStore from "../hooks/useFireStore";
import PatientCard from "./patientCard";

const ImageGrid = ({ setSelectedPhoto }) => {
  const { docs, loading } = useFireStore("images");

  return (
    <div className="px-3 md:px-32 flex justify-center ">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4  gap-4 mt-5 px-3 md:px-16">
        {docs &&
          docs.map((doc) => (
            <PatientCard
              patient={doc}
              key={doc.id}
              setSelectedPhoto={setSelectedPhoto}
              loading={loading}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;
