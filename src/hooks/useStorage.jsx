import { useState, useEffect } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStorage = (file, patientName, age, contact) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    // Create a storage reference
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = collection(projectFirestore, "images");

    // Upload the file
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor the progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        try {
          // Get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Add the document to Firestore
          const docRef = await addDoc(collectionRef, {
            url: downloadURL,
            createdAt: serverTimestamp(),
            patientName: patientName,
            age: age,
            contact: contact,
          });
          // Update state
          setUrl(downloadURL);
        } catch (err) {
          setError(err);
        }
      }
    );

    // Clean up function
    return () => {
      if (uploadTask.snapshot.state === "running") {
        uploadTask.cancel();
      }
    };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
