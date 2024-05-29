import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
// import { projectStorage } from "../firebase/config";

const Progressbar = ({ file, setFile, patientName, setPatientName, age, setAge, contact, setContact }) => {
  const { url, progress } = useStorage(file, patientName, age, contact);

  useEffect(() => {
    if (url) {
      setFile(null);
      setPatientName("");
      setAge("");
      setContact("");
    }
  }, [url, setFile, setPatientName, setAge, setContact ]);

  return (
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-blue-200">
        <div className="bg-blue-600 h-full rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
  );
};

export default Progressbar;

// A PIN
