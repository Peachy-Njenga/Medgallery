import React from "react";
import Skeleton from '@mui/material/Skeleton';

const PatientCard = ({ patient, setSelectedPhoto, loading }) => {
  const { url, patientName, contact, age } = patient;

  return (
    <div>
      {url && (
        <div className="border p-2 rounded-md " >
          <img
            src={url}
            alt={patientName}
            className="h-52 max-w-full  w-48 md:w-72 rounded-lg object-cover "
            onClick={() => setSelectedPhoto(url)}
          />
          <div className="flex flex-col ">
            <span className="text-xl font">{patientName}</span>
            <span className="text-sm">{contact}</span>
            <span className="text-sm">{age}</span>
          </div>
        </div>
      ) }
        {/* <div className="border p-2 rounded-md " >
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          <div className="flex flex-col ">
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
          </div>
        </div>  */}

    </div>
  );
};

export default PatientCard;
