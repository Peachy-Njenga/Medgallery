import React, { useEffect } from "react";
import useFireStore from "../hooks/useFireStore";
import PatientCard from "./patientCard";

const ImageGrid = ({setSelectedPhoto}) => {
  const { docs } = useFireStore("images");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {docs && docs.map(doc => (
          <PatientCard patient={doc} key={doc.id} setSelectedPhoto={setSelectedPhoto} />
        ))}
    </div>
  );
};

export default ImageGrid;
