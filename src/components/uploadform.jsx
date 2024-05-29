import React, { useState } from "react";
import Progressbar from "./progressbar";

const Uploadform = () => {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleFileOnSubmit = (e) => {
    e.preventDefault();
    let selected = e.target.children[1].children[0].files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setFileError("");
    } else {
      setFile(null);
      setFileError("Please select an image file(jpeg or png)");
    }
  };

  return (
    <div className="w-full  bg-blue-100 flex items-center justify-center">
      <form
        onSubmit={(e) => handleFileOnSubmit(e)}
        className="max-w-md mx-auto"
      >
        <div>
          {fileError && <div>{fileError}</div>}
          {file && <Progressbar file={file} setFile={setFile} patientName={patientName} setPatientName={setPatientName} age={age} setAge={setAge} contact={contact} setContact={setContact}/>}
        </div>
        <div>
          <input type="file" />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="patient_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Patient Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="age"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Age
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="phone_number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Uploadform;
