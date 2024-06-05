import React, {useState } from "react";
import Skeleton from "@mui/material/Skeleton";
// Initialization for ES Users

const PatientCard = ({ patient, setSelectedPatient, loading }) => {
  const { url, patientName, contact, age } = patient;

  const handleEdit = () => {
    console.log("edit")
  }

  const handleDelete = () => {
    console.log("delete")
  }

  return (
    <div>
      {url && (
        <div className="border p-2 rounded-md ">
          <img
            src={url}
            alt={patientName}
            className="h-52 max-w-full  w-48 md:w-72 rounded-lg object-cover "
            onClick={() => setSelectedPatient(patient)}
          />
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <div>
                <span className="text-sm text-gray-500">Name: </span>
                <span className="text-xl font">{patientName}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Contact: </span>
                <span>{contact}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Age: </span>
                <span>{age}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button>opt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCard;
