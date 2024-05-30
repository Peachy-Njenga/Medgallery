import React, { useState } from "react";
import Progressbar from "./progressbar";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { PiUploadSimple } from "react-icons/pi";

const Uploadform = () => {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

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
    <div className="">
      <div className="flex justify-center items-center">
        <TERipple rippleColor="white">
          <button
            type="button"
            className=" flex gap-2 border border-black bg-white rounded-md px-4 py-1"
            onClick={() => setShowUploadModal(true)}
          >
            <IoIosAddCircleOutline className="text-2xl" />
            <span className="">New Patient</span>
          </button>
        </TERipple>
      </div>

      <TEModal show={showUploadModal} setShow={setShowUploadModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Upload Patient Details
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content text-lg rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowUploadModal(false)}
                aria-label="Close"
              >
                <IoClose />
              </button>
            </TEModalHeader>
            <TEModalBody>
              <form
                onSubmit={(e) => handleFileOnSubmit(e)}
                className="max-w-md mx-auto flex flex-col gap-3"
              >
                <div>
                  {fileError && <div>{fileError}</div>}
                  {file && (
                    <Progressbar
                      file={file}
                      setFile={setFile}
                      patientName={patientName}
                      setPatientName={setPatientName}
                      age={age}
                      setAge={setAge}
                      contact={contact}
                      setContact={setContact}
                    />
                  )}
                </div>
                <div>
                  <input type="file" />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="patient_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Patient Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="age"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Age
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="phone_number"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone Number
                  </label>
                </div>
                <div className="flex items-center justify-center">
                  <TERipple rippleColor="gray">
                    <button
                      type="submit"
                      className="flex gap-2 border hover:bg-gray-50 drop-shadow-sm border-black bg-white rounded-md px-4 py-1"
                    >
                      <PiUploadSimple className="text-xl" />
                      <span>Upload</span>
                    </button>
                  </TERipple>
                </div>
              </form>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default Uploadform;
