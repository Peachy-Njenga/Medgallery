import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
// import { projectStorage } from "../firebase/config";

const Progressbar = ({ file, setFile}) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
  );
};

export default Progressbar;

// A PIN
