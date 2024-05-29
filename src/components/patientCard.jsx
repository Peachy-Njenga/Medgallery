import React from "react";

const PatientCard = ({ patient, setSelectedPhoto }) => {
  const { url, patientName, contact, age } = patient;

  return (
    <div>
      {url && (
        <div className="border p-2 rounded-md " >
          <img
            src={url}
            alt="Patient image"
            className="h-52 max-w-full  w-48 md:w-72 rounded-lg object-cover "
            onClick={() => setSelectedPhoto(url)}
          />
          <div className="flex flex-col ">
            <span className="text-xl font-medium">{patientName}</span>
            <span className="text-sm">{contact}</span>
            <span className="text-sm">{age}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCard;
