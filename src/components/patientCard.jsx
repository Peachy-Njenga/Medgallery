import React from "react";

const PatientCard = ({ patient, setSelectedPhoto }) => {
    const {url, patientName, contact, age} = patient;
    
  return (
    <div className="" onClick={() => setSelectedPhoto(url)}>
      <img
        src={url}
        alt="Patient image"
        className="h-auto max-w-full rounded-lg"
      />
      <div>
        <span>{patientName}</span>
        <span>{contact}</span>
        <span>{age}</span>
      </div>
    </div>
  );
};

export default PatientCard;
